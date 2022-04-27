import { useState, useEffect} from 'react'

/* 
  Components in react are made up of a render function and a state object. It must return a html element. 
*/

import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => 
          <RepositoryItem 
            key={repository.id} 
            repository={repository} />) 
        }
      </ul>
    </section>
  );
}
