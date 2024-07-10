import { useState } from 'react';
import './App.css'
import { Infos } from './Infos';
import {Suspense} from "react";
import { ErrorBoundary } from "react-error-boundary";


const getRepos = async () => {
  const response = await fetch('https://api.github.com/users/mmarcmartins/repos')
  const data = await response.json();

  return data;
  
}

const Repos =  () => {
  return(
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Suspense fallback={<p>Loading....</p>}>
      <Infos repoPromise={getRepos()}/>
    </Suspense>
    </ErrorBoundary>
  )
}

const Counter = () => {

  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => {
        setCount(count => count + 1);
      }}>+</button>
      <button onClick={() => {
        setCount(count => count - 1);
      }}>-</button>
      <input type="text" name="test" placeholder="0" value={count} disabled/>     
    </>
  )
};

function App() {  
  return (
    <>
      <Counter/>
     <Repos/>
    </>
  )
}

export default App
