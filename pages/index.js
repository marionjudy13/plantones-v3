import Grid from '../components/Grid'
import Topnav from '../components/Topnav'
import { client } from '../utils/client'

export default function Home({ plants }) {
  return (
    <>
      <Topnav />
      <section class="p-5 sm:p-10">
        <Grid props={plants} />
      </section>
    </>
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
