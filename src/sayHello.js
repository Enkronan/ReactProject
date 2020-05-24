import React from "react";

function Hello(){
    const sayHello = () => {
        console.log("Hello");
      };
    return(
        <div>
            <h2>This is the Hello component</h2>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;