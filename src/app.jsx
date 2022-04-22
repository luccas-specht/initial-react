import './styles/global.scss'

import { RepositoryList } from './components/RespositoryList'

import { Counter } from './components/Counter'

/* 
  React concepts: 
  1. Components:
    - Components are made up of a render function and a state object. It must return a html element.
  
  2. Props:
    - Props are the properties that are passed to the component.
  
  3. State:
    - State is a plain javascript object that represents the current state of the component.
*/

/* 
render => this component have showed up on the screen 

*/

export function App() {
  return (
    <>
    <RepositoryList/>
    <Counter/>
    </>
  )
}