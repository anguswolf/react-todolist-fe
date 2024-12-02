import { useEffect, useState, useRef } from "react";
import "./App.css"
import { Outlet } from "react-router";

function App(){

  const [count, setCount] = useState(0);

  const nameRef = useRef()
/*
  useEffect(()=>{
    console.log(nameValue, 'NAME VALUE');
    console.log(emailValue, 'EMAIL VALUE');
  }, [nameValue]
) */

  useEffect(()=>{
    console.log(nameRef.current,' EMAIL VALUE');
  }, [nameRef]
)

  return (
    <>
    {/* <section>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      {(count < 2 || count > 5) && <MovieList />}
      </section> */}

    <h1>Benvenuti su APP()</h1>
    <a href="./">Home</a><br />
    <a href="./register">Registration</a><br />
    <a href="./login">Login</a><br />
    <a href="./movielist">Movie List</a><br />
    <Outlet />
    </>
  )
}

export default App;