import React from 'react'

function AddOne(props){
    // console.log(props)
    
    const [count, setCount] = React.useState(0)
    const [test, setTest] = React.useState(1)
    const [todo, setTodo] = React.useState(null)
    // ^^^ State are special variables that will trigger an update of a component

    React.useEffect(() => {
        console.log("useEffect")
        console.log(test)
    }, [test]) 
    // ^^^ passes a function that run only the first time the page is rendered
    // ^^^ second arguemnt is the 'dependency list'. 
    // dependency list = List of variables that when they change will run the function again.
    // therefore, it will only run when test changes. 
    
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((todo) => {
            setTodo(todo)
        })
    }, [])

    const todoJSX = todo ? <h1>{todo.title}</h1> : <h1>...Loading...</h1>
    // ^^^ says if todo is there render the title, if it is not there yet render loading

    const plusOne = () => {
        setCount(count + 1)
        if (count > 10) {
            setTest(test + 1)
            // once count excedes 10 it will run it everytime
            // doesnt happen until 12 becuase of 'async thing' ASK ROB!!!
        }
    }

    const minusOne = () => {
        setCount(count - 1)
        if (count > 10) {
            setTest(test - 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }


    return <>
    <h1>Count = {count}</h1>
    <button onClick={plusOne}>Add One</button>
    <button onClick={minusOne}>Sub One</button>
    <button onClick={resetCount}>Reset</button>
    <br/>
    {props.tip}
    {todoJSX}



    </>
}
export default AddOne