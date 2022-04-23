import  '../styles/repositories.scss'

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props?.repository?.name ?? 'not informated'}</strong>
      <p>{props?.repository?.description ?? 'not informated'}</p>
      <a href={props?.repository?.html_url}>Acessar Repositório</a>
    </li>
  );
}
