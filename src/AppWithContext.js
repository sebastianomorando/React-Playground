import React, { useState, createContext, useContext } from 'react';

function initContext() {
  let [state, setState] = useState('mario');
  return createContext({state, setState});
}

let AppContext;

const ComponentOne = (props) => {

  const {state, setState} = useContext(AppContext)

  return <b>{state}</b>
}

const ComponentTwo = (props) => {

  const {state, setState} = useContext(AppContext)

  return <>
    <button onClick={ () => { setState('Franco') } } >click me</button>
  </>

}

const AppWithContext = () => {

  AppContext = initContext()

  const {state, setState} = useContext(AppContext)

  return (<>
    <p>
      {state} <br/>
      <ComponentOne/> <br/>
      <ComponentTwo/>
    </p>
  </>)
}

export default AppWithContext
