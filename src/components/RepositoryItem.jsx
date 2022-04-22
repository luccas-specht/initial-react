import  '../styles/repositories.scss'

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props?.repository?.name ?? 'peppa'}</strong>
      <p>{props?.repository?.description ?? 'non'}</p>
      <a href={props?.repository?.link}>Acessar Repositório</a>
    </li>
  );
}
