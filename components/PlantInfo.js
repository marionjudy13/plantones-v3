import BlockContent from "@sanity/block-content-to-react";
import DirectLight from "./Lighting/DirectLight";
import IndirectLight from "./Lighting/IndirectLight";
import PartialLight from "./Lighting/PartialLight";
import EveryTwoWeeks from "./Water/EveryTwoWeeks";
import OnceAWeek from "./Water/OnceAWeek";
import TwiceAWeek from "./Water/TwiceAWeek";
import TwoToFour from "./Water/TwoToFourWeeks";

export default function PlantInfo({
  commonName,
  scientificName,
  nicknames,
  lightReq,
  waterFreq,
  dirtPref,
  funFacts,
}) {

  return (
    <section class="border-l border-black p-14 sm:p-20 md:p-10 md:w-3/5 md:overflow-auto md:h-full lg:w-1/2">
      <h1 class="text-2xl font-black uppercase sm:text-4xl">{commonName}</h1>
      <h2 class="text-xl sm:text-3xl mb-4">{scientificName}</h2>
      <h3 class="text-lg font-light mb-4">
        <span class="font-medium">Nickname(s): </span>
        {nicknames}
      </h3>

      {/* Plant Preferences - Separate to component */}
      <div class="flex flex-wrap items-center mb-5">



          {/* Light Requirements */}
          <span class="flex w-full mb-2">
            {(lightReq.lightType == "Indirect Sun") ? <IndirectLight /> :
            (lightReq.lightType == "Direct Sun") ? <DirectLight /> :
            (lightReq.lightType == "Partial Sun") ? <PartialLight /> :
            (lightReq.lightType == "Shade") ? 'shade' :
            "I'm not sure about the light requirements!"}
            <p class="text-sm mb-0 ml-2 uppercase font-medium">{lightReq.lightType}</p>
          </span>



          {/* Watering Frequency */}
          <span class="flex w-full mb-2">
            {(waterFreq.waterFreq == "Once a Week") ? <OnceAWeek /> :
            (waterFreq.waterFreq == "Twice a Week") ? <TwiceAWeek /> :
            (waterFreq.waterFreq == "Once every two weeks") ? <EveryTwoWeeks /> :
            (waterFreq.waterFreq == "Once every 2 - 4 weeks") ? <TwoToFour /> : 
            "I'm not sure the water requirements."
            }
            <p class="text-sm  ml-2 mb-0 uppercase font-medium">Water: {waterFreq.waterFreq}</p>
          </span>

          
          {/* Dirt Preference */}
          <span>
            <p class="text-sm mb-0 uppercase font-medium">Soil: {dirtPref.dirtPref}</p>
          </span>
      </div>

      <hr class="mb-5" />
      <BlockContent blocks={funFacts} />
    </section>
  );
}
