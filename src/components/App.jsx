import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
function generarTemas(topic) {
  return (
    <Entry
      key={topic.id}
      emoji={topic.emoji}
      name={topic.name}
      meaning={topic.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(generarTemas)}</dl>
    </div>
  );
}

export default App;
