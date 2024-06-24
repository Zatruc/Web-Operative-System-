import React, { useState } from "react";
import IconApp from "./IconApp.jsx";
import StartButton from "./StartButton.jsx";

const Taskbar = ({ setUrl }) => {
  return (
    <div className="bg-gray-900 flex items-center h-16 px-4">
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4 bg-gray-700 rounded-md px-2.5 py-1">
        <IconApp
          src="../../public/icons/AppStore.svg"
          onClick={() => setUrl("https://appstore.com")}
        />
        <IconApp
          src="../../public/icons/Calculator.svg"
          onClick={() => setUrl("https://calculator.com")}
        />
        <IconApp
          src="../../public/icons/VScode.svg"
          onClick={() => setUrl("https://vscode.com")}
        />
      </div>
      <div className="flex-shrink-0">
        <StartButton />
      </div>
      <div className="flex justify-end space-x-4 bg-gray-700 rounded-md px-2.5 py-1">
        <IconApp
          src="../../public/icons/Folder.svg"
          onClick={() => setUrl("https://folder.com")}
        />
        <IconApp
          src="../../public/icons/Excel.svg"
          onClick={() => setUrl("https://excel.com")}
        />
        <IconApp
          src="../../public/icons/Spotify.svg"
          onClick={() => setUrl("https://spotify.com")}
        />
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Taskbar;
