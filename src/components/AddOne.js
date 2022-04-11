import React from 'react'

function AddOne(props){
    console.log(props)
    
    const [count, setCount] = React.useState(0)
    
    const plusOne = () => {
        setCount(count + 1)
        // console.log(count)
    }

    const minusOne = () => {
        setCount(count - 1)
        // console.log(count)
    }

    const resetCount = () => {
        setCount(0)
    }

    return <>
    <h1>Count = {count}</h1>
    <button onClick={plusOne}>Add One</button>
    <button onClick={minusOne}>Sub One</button>
    <button onClick={resetCount}>Reset</button>
    </>
}
export default AddOne