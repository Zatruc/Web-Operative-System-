import React, { useState } from "react";
import ReactDOM from "react-dom";
import Taskbar from "../components/Taskbar";
import Notifications from "../components/Notifications";

const App = () => {
  const [currentUrl, setCurrentUrl] = useState("https://example.com");

  return (
    <div className="bg-gray-800 text-white flex flex-col h-screen">
      <div className="flex-grow flex h-full w-full">
        <iframe
          src={currentUrl}
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
      <Taskbar setUrl={setCurrentUrl} />
      <Notifications />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
