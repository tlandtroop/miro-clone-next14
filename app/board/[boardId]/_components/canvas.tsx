"use client";

import { useState } from "react";

import { CanvasMode, CanvasState } from "@/types/canvas";
import { useHistory, useCanUndo, useCanRedo } from "@/liveblocks.config";

import { Info } from "./info";
import { Toolbar } from "./toolbar";
import { Participants } from "./participants";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
    </main>
  );
};
