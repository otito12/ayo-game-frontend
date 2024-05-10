"use client";
import React, { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import { FALSE_DICT, INITIAL_BOARD } from "./constants";
import { getNextIndex, getPrevIndex } from "./utils";
import { Grid, Typography } from "@mui/material";
import Moves from "./Moves";

// rules:  https://www.youtube.com/watch?v=M3LjiN7BSRs

function Board() {
  const [hintHighlighted, setHintHighlighted] = useState<any>(FALSE_DICT);
  const [boardState, setBoardState] = useState(INITIAL_BOARD);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [moves, setMoves] = useState<any>([]);
  const worldRef = useRef<any>();
  const [selected, setSelected] = useState(-1);
  const [worldHeight, setWorldHeight] = useState("");
  const [worldWidth, setWorldWidth] = useState("");
  const handleMove = (index: number) => {
    let tempboard = boardState;
    console.log(tempboard);
    let move = boardState[index];
    let i: number = getNextIndex(index);
    while (move > 0) {
      console.log(i);
      tempboard[i] = tempboard[i] + 1;
      i = getNextIndex(i);
      move--;
    }
    tempboard[index] = 0;
    setMoves((prev: any) => [
      ...prev,
      {
        player: playerTurn,
        start_index: index,
        end_index: getPrevIndex(i),
      },
    ]);
    setPlayerTurn((prev) => {
      if (prev === 1) {
        return 2;
      } else {
        return 1;
      }
    });
    let postcaptured = checkCapture(tempboard);
    if (checkWin(postcaptured)) {
      // game state to player win
    }

    setBoardState(postcaptured);
  };

  const checkCapture = (board: any) => {
    return board;
  };

  const checkWin = (board: any) => {
    return true;
  };

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
    // console.log(hintHighlighted);
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
    <Grid container>
      <Grid container justifyContent={"end"} pb={3}>
        <Grid container justifyContent={"end"}>
          <Typography>Opponent</Typography>
        </Grid>
        <Typography variant="h5">10</Typography>
      </Grid>
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
            handleMove={handleMove}
          />
        ))}
      </div>
      <Grid container pt={3}>
        <Grid container>
          <Typography>Player</Typography>
        </Grid>
        <Typography variant="h5">10</Typography>
      </Grid>
      <Grid container pt={3}>
        {moves.length > 0 && <Moves moves={moves} />}
      </Grid>
    </Grid>
  );
}

export default Board;
