/* 
  Components in react are made up of a render function and a state object. It must return a html element. 
*/

const respository = {
  name:'feijão',
  description:'Forms in React',
  link:'https://github.com/unform/unform'
}

import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={respository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
