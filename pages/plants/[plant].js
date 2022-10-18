import PlantCard from "../../components/PlantCard";
import PlantCardList from "../../components/PlantCardList";
import PlantInfo from "../../components/PlantInfo";
import { client } from "../../utils/client";
import Layout from "../../components/Layout";

const PlantPage = ({
  singlePlant: { 
    commonName, 
    hexCode, 
    scientificName, 
    plantImage, 
    pantone, 
    lightReq,
    funFacts,
    },
}) => {
  return (
    <Layout>
      <PlantCardList commonName={commonName} />
      <PlantCard
        name={commonName}
        pantone={pantone}
        hexCode={hexCode}
        scientificName={scientificName}
        image={plantImage}
      />
      <PlantInfo 
        name={commonName} 
        scientificName={scientificName} 
        lightReq={lightReq}
        funFacts={funFacts} />
    </Layout>
  );
};

export default PlantPage;

export async function getServerSideProps({ params }) {
  const { plant } = params;
  const singlePlant = await client.fetch(
    `*[_type == "plants" && slug.current == $plant][0] {
        commonName,
        dirtReq,
        geoOrigin,
        hexCode,
        pantone,
        lightReq -> {
            lightType,
            lightDescription,
            example
        },
        plantImage,
        scientificName,
        toxicity,
        funFacts
    }`,
    {
      plant,
    }
  );

  return {
    props: {
      singlePlant,
    },
  };
}
