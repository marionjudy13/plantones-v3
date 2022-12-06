import BlockContent from "@sanity/block-content-to-react";
import Meter from "./Meter";
import BackHome from "./BackHome";

export default function PlantInfo({
  commonName,
  scientificName,
  hexCode,
  nicknames,
  lightReq,
  waterFreq,
  dirtPref,
  funFacts,
  lightNumber,
  waterNumber,
}) {
  return (
    <section class="sm:border-l border-black p-12 sm:p-20 md:p-10 md:w-3/5 md:overflow-auto md:h-full lg:w-1/2">
      <h1 class="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
        {commonName}
      </h1>
      <h2 class="text-xl sm:text-3xl mb-10">{scientificName}</h2>

      {/* Plant Preferences - Separate to component */}
      <div class="flex flex-wrap items-center mb-7">
        {/* Light Requirements */}
        <span class="flex w-full mb-2">
          <p class="text-sm mr-2 mb-0 font-light">
            <span class="font-medium uppercase mr-1">Light:&nbsp;</span>
            {lightReq.lightType}
          </p>
          <Meter number={lightNumber} prefix="sun" size={15} />
        </span>

        {/* Watering Frequency */}
        <span class="flex w-full mb-2">
          <p class="text-sm mr-2 mb-0 font-light">
            <span class="font-medium uppercase mr-1">Water:&nbsp;</span>
            {waterFreq.waterFreq}
          </p>
          <Meter number={waterNumber} prefix="droplet" size={13} />
        </span>

        {/* Dirt Preference */}
        <span class="flex w-full mb-2">
          <p class="text-sm  mb-0 font-light">
            <span class="font-medium uppercase mr-1">
              Soil Preference:&nbsp;
            </span>
            {dirtPref.dirtPref}
          </p>
        </span>

        {/* Nicknames */}
        <span class="flex w-full mb-2">
          <p class="text-sm mb-0 font-light">
            <span class="font-medium uppercase mr-2">Nickname(s): </span>
            {nicknames ? nicknames : "Not Sure!"}
          </p>
        </span>
      </div>

      <hr class="mb-8" />
      <BlockContent blocks={funFacts} />
      <BackHome color={hexCode} />
    </section>
  );
}
