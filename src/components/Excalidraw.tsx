"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import React, { useEffect, useState } from "react";
interface ExcalidrawComponentProp {
  canvasData: JSON;
  setCanvasData: React.Dispatch<React.SetStateAction<JSON>>;
}
const ExcalidrawComponent = () => {
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();
  const [whiteBoardData, setWhiteBoardData] = useState<any>({});
  useEffect(() => {
    const updateWhiteBoardData = setTimeout(() => {
      console.log(whiteBoardData);
    }, 1000);
    return () => {
      clearTimeout(updateWhiteBoardData);
    };
  }, [whiteBoardData]);
  return (
    <div style={{ height: "100%" }} className=" custom-styles">
      <Excalidraw
        initialData={{
          appState: {
            viewBackgroundColor: "#0A0A0A",
            currentItemStrokeColor: "#ffffff",
          },
        }}
        theme="dark"
        onChange={(excalidrawElements, appState, files) => {
          setWhiteBoardData(excalidrawElements);
        }}
      >
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.SaveAsImage />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawComponent;
