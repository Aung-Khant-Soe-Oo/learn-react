import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <div className={`w-full h-screen bg-${color}-600`}>
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center bg-white gap-3 px-3 py-2 rounded-2xl">
          <button
            className="bg-red-600 outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-600 outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
