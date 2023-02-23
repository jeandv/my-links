import { api } from '@/api';

export default async function Home() {

  const links = await api.links.fetch();

  console.log(links)

  return (
    <main>
      <h1>Jeandv</h1>
      <ul>
        {
          links.map(({ label, url }) => (
            <li key={label}>
              <a href={url} target='_blank' rel='noreferrer'>{label}</a>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
