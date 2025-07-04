export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/hello')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}
 
export default function Page({ repo }) {
  return (
    <main>
      <p>{repo.name}</p>
    </main>
  )
}