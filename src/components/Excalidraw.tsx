"use client";
import React from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
const ExcalidrawComponent = () => {
  return (
    <div style={{ height: "100%" }}>
      <Excalidraw
        initialData={{
          appState: {
            theme: "dark",
          },
        }}
      >
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.SaveAsImage />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawComponent;
