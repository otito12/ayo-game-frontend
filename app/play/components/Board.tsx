"use client";
import React, { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import { FALSE_DICT, INITIAL_BOARD } from "./constants";

// rules:  https://www.youtube.com/watch?v=M3LjiN7BSRs

function Board() {
  const getNextIndex = (current_index: number) => {
    // const boardSeries = [6, 7, 8, 9, 10, 11, 5, 4, 3, 2, 1];
    if (current_index === 0) {
      return 6;
    } else if (current_index === 11) {
      return 5;
    } else if (current_index > 5) {
      return current_index + 1;
    } else {
      return current_index - 1;
    }
  };

  const [hintHighlighted, setHintHighlighted] = useState<any>(FALSE_DICT);
  const [boardState, setBoardState] = useState(INITIAL_BOARD);
  const [moves, setMoves] = useState([]);
  const worldRef = useRef<any>();
  const [selected, setSelected] = useState(-1);
  const [worldHeight, setWorldHeight] = useState("");
  const [worldWidth, setWorldWidth] = useState("");

  useEffect(() => {
    let false_dict: any = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
    };
    if (selected === -1) {
      setHintHighlighted(false_dict);
    } else {
      let move = boardState[selected];
      let i: number = getNextIndex(selected);
      while (move > 0) {
        false_dict[i] = false_dict[i] + 1;
        i = getNextIndex(i);
        move--;
      }
      setHintHighlighted(false_dict);
    }
  }, [selected]);

  useEffect(() => {
    console.log(hintHighlighted);
  }, [hintHighlighted]);

  const resizeWorld = () => {
    const WORLD_WIDTH = 100;
    const WORLD_HEIGHT = 30;
    let worldScale;
    if (typeof window !== "undefined") {
      if (
        window?.innerWidth / window?.innerHeight <
        WORLD_WIDTH / WORLD_HEIGHT
      ) {
        worldScale = window?.innerWidth / WORLD_WIDTH;
      } else {
        worldScale = window?.innerHeight / WORLD_HEIGHT;
      }
      worldRef.current.style.width = `${WORLD_WIDTH * worldScale}px`;
      worldRef.current.style.height = `${WORLD_HEIGHT * worldScale}px`;
      setWorldWidth(`${WORLD_WIDTH * worldScale}px`);
      setWorldHeight(`${WORLD_HEIGHT * worldScale}px`);
    }
  };
  useEffect(() => {
    resizeWorld();
  }, []);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", resizeWorld);
  }
  return (
    <div
      ref={worldRef}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {boardState.map((count, index: any) => (
        <Cell
          worldHeight={worldHeight}
          worldWidth={worldWidth}
          index={index}
          setSelected={setSelected}
          selected={selected}
          count={count}
          hintHighlighted={hintHighlighted[index]}
        />
      ))}
    </div>
  );
}

export default Board;
