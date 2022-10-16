import Grid from '../components/Grid'
import Layout from '../components/Layout'
import { client } from '../utils/client'

export default function Home({ plants }) {
  return (
    <Layout>
      <Grid props={plants} />
    </Layout>
  )
}

export async function getStaticProps() {
  const plants = await client.fetch(`*[_type == "plants"] {
    ...,
    "slug": slug.current,
  }`)

  return {
    props: {
      plants,
    },
  }
}
