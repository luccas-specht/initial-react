/* 
  Components in react are made up of a render function and a state object. It must return a html element. 
*/

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <li>
          <strong>
            Unform
          </strong>
          <p>
            Forms in React
          </p>
          <a href="">
            Acessar Repositório
          </a>
        </li>    
      </ul>
    </section>
  )
}