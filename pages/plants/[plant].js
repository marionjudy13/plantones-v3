import PlantCard from "../../components/PlantCard";
import PlantCardList from "../../components/PlantCardList";
import PlantInfo from "../../components/PlantInfo";
import { client } from "../../utils/client";
import Layout from "../../components/Layout";
import { plantDetails } from "../../queries/plantDetails";

const PlantPage = ({ allPlants, plantDetails }) => {
  return (
    <Layout>
      <PlantCardList items={allPlants} />
      <section
        class="w-full p-5 sm:p-10 md:w-2/5 lg:w-1/4"
        style={{
          backgroundColor: plantDetails.hexCode,
        }}
      >
        <PlantCard {...plantDetails} />
      </section>
      <PlantInfo {...plantDetails} />
      {/* <BlockContent blocks={funFacts} /> */}
    </Layout>
  );
};
export default PlantPage;

export async function getServerSideProps({ params }) {
  const { plant } = params;
  const data = await client.fetch(plantDetails, {
    plant,
  });

  if (!data.plantDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      plantDetails: data.plantDetails,
      allPlants: data.allPlants,
    },
  };
}
