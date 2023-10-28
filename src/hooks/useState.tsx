import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    return(
        <>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count => count + 1)}> Increase</button>
        </>
    )

}