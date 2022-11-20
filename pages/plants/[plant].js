import PlantCard from "@components/PlantCard";
import PlantCardList from "@components/PlantCardList";
import PlantInfo from "@components/PlantInfo";
import { client } from "@utils/client";
import Layout from "@components/Layout";
import { plantDetails } from "@queries/plantDetails";

const PlantPage = ({ allPlants, plantDetails }) => {
  return (
    plantDetails && (
      <Layout>
        <PlantCardList items={allPlants} />
        <section
          class="w-full p-10 md:w-2/5 lg:w-1/4"
          style={{
            backgroundColor: plantDetails.hexCode,
          }}
        >
          <PlantCard {...plantDetails} />
        </section>
        <PlantInfo {...plantDetails} />
      </Layout>
    )
  );
};
export default PlantPage;

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "plant"]`);
  const pathSlugs = res.map((singlePlant) => ({
    params: { slug: singlePlant.slug.current },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { plant } = params;
  const res = await client.fetch(plantDetails, {
    plant,
  });

  if (!res.plantDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      plantDetails: res.plantDetails,
      allPlants: res.allPlants,
    },
  };
}
