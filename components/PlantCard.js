import imageUrlBuilder from "@sanity/image-url";
import { client } from "../utils/client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function PlantCard({ scientificName, image, pantone, hexCode }) {
  return (
    <section class="border border-black mb-10 shadow-lg">
      <span
        class="block bg-no-repeat bg-cover aspect-w-1 aspect-h-1"
        style={{
          backgroundColor: hexCode,
          backgroundImage: image
            ? `url('${urlFor(image).width(400).height(400).fit("crop")}')`
            : undefined,
        }}
      />
      <div class="p-5">
        <h1 class="text-2xl uppercase sm:text-6xl">{pantone}</h1>
        <h2 class="text-lg">{scientificName}</h2>
      </div>
    </section>
  );
}
