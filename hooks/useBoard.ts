import create, { GetState, SetState, State, StoreApi } from "zustand";
import { combine } from "zustand/middleware";
import { getLadders, getSnakes } from "../helpers";
import { getPlayers } from "../helpers/playerHelper";
import produce from "immer";

type StateCreator<T extends State, CustomSetState = SetState<T>, U extends State = T> = (
  set: CustomSetState,
  get: GetState<T>,
  api: StoreApi<T>
) => U;

const immer =
  <T extends State, U extends State>(
    config: StateCreator<T, (fn: (draft: T) => void) => void, U>
  ): StateCreator<T, SetState<T>, U> =>
  (set, get, api) =>
    config((fn) => set(produce(fn)), get, api);

export const useBoard = create(
  combine(
    {
      snakes: getSnakes(),
      ladders: getLadders(),
      players: getPlayers(),
      turn: 0,
    },
    immer((set) => ({
      rollDice: () => {
        const diceNum = Math.ceil(Math.random() * 6);
        return set((state) => {
          state.players[state.turn].pos += diceNum;
          return void (state.turn = state.turn === 0 ? 1 : 0);
        });
      },
      checkPlacement: () => {
        return set((state) => {
          const prevTurn = state.turn === 0 ? 1 : 0;
          const prevPlayerCurrPos = state.players[prevTurn].pos;

          const s = state.snakes.find((snake) => snake.startPos === prevPlayerCurrPos);
          const l = state.ladders.find((ladder) => ladder.startPos === prevPlayerCurrPos);

          if (s) {
            return void (state.players[prevTurn].pos = s.endPos);
          } else if (l) {
            return void (state.players[prevTurn].pos = l.endPos);
          }
        });
      },
    }))
  )
);
