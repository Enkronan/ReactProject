import React, {useState} from "react";
import "./App.css"
import Tweet from "./Tweet";

function App(){

  const [users, setUsers] = useState([
    {name: "Robin", message: "Hello there"},
    {name: "Elin", message: "Hiya"},
    {name: "Dog", message: "Woof!"}
  ]);

  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
