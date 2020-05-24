import React from "react";
import Tweet from "./Tweet"

function App(){

  return (
    <div className="App">
      <Tweet name="Robin" message="Random tweet!"/>
      <Tweet name="Elin" message="Random tweet!" />
      <Tweet name="Dog" message="Random tweet!"/>
    </div>
  );
}

export default App;
