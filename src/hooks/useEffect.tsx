import {useEffect, useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('The counter has been updated')
    }, [count])

    return(
        <>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    )
}