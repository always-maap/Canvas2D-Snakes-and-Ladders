import create from "zustand";
import { combine } from "zustand/middleware";
import { DoublyLinkedList } from "collectionstypescript";
import { getLadders, getSnakes } from "../helpers";
import { getPlayers } from "../helpers/playerHelper";

export const useBoard = create(
  combine(
    { board: new DoublyLinkedList(), snakes: getSnakes(), ladders: getLadders(), players: getPlayers(), turn: 1 },
    (set) => ({
      init: () => {
        return set((state) => {
          const newBoard = state.board;
          for (let i = 1; i <= 100; i++) {
            if (state.snakes.find((snake) => snake.startPos === i)) {
              newBoard.push(1);
            } else if (state.ladders.find((ladder) => ladder.startPos === i)) {
              newBoard.push(2);
            } else {
              newBoard.push(0);
            }
          }
          return { board: newBoard };
        });
      },
      rollDice: () => {},
    })
  )
);
