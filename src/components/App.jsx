import React from "react";
import emojipedia from "../emojipedia";

function generarTemas(topic) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {topic.emoji}
        </span>
        <span>{topic.name}</span>
      </dt>
      <dd>{topic.meaning}</dd>
    </div>
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
