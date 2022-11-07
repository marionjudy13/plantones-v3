import BlockContent from "@sanity/block-content-to-react";

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
      <h1 class="text-2xl font-black uppercase sm:text-3xl">{commonName}</h1>
      <h2 class="text-xl sm:text-2xl mb-3">{scientificName}</h2>
      <h3>{nicknames}</h3>
      <div class="flex justify-between	 items-center mb-5">
      <span class="flex">
        <img width="15" class="mr-2" src="/sun-solid.svg" />
        <p class="text-sm mb-0 uppercase font-bold">{lightReq.lightType}</p>
        </span>
        <p class="text-sm mb-0 uppercase font-bold">{waterFreq.waterFreq}</p>
        <p class="text-sm mb-0 uppercase font-bold">{dirtPref.dirtPref}</p>
      </div>
      <hr class="mb-5" />
      <BlockContent blocks={funFacts} />
    </section>
  );
}
