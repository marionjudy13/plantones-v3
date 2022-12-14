import imageUrlBuilder from "@sanity/image-url";
import { client } from "../utils/client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function PlantCard({
  scientificName,
  plantImage,
  pantone,
  hexCode,
}) {
  return (
    <div class="border border-black bg-white">
      <span
        class="block bg-no-repeat bg-cover aspect-w-1 aspect-h-1 border-b border-black"
        style={{
          backgroundColor: hexCode,
          backgroundImage: plantImage
            ? `url('${urlFor(plantImage).width(400).height(400).fit("crop")}')`
            : undefined,
        }}
      />
      <div class="p-10 sm:p-10 md:p-7 xl:p-10">
        <h2 class="text-4xl sm:text-4xl md:text-3xl xl:text-4xl font-black uppercase mb-1">
          {pantone}
        </h2>
        <h3 class="text-lg leading-5">{scientificName}</h3>
      </div>
    </div>
  );
}
