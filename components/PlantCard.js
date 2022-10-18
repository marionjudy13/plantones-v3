import imageUrlBuilder from "@sanity/image-url";
import { client } from "../utils/client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function PlantCard({ scientificName, image, pantone, hexCode }) {
  return (
    <section 
      class="w-full p-5 sm:p-10 md:w-2/5 lg:w-2/5" 
      style={{
          backgroundColor: hexCode,
        }}>
        <div class="border border-black bg-white">
          <span
            class="block bg-no-repeat bg-cover aspect-w-1 aspect-h-1  border-b border-black"
            style={{
              backgroundColor: hexCode,
              backgroundImage: image
                ? `url('${urlFor(image).width(400).height(400).fit("crop")}')`
                : undefined,
            }}
          />
          <div class="p-10">
            <h2 class="text-2xl font-black uppercase sm:text-5xl">{pantone}</h2>
            <h3 class="text-lg sm:text-xl">{scientificName}</h3>
          </div>
        </div>
    </section>
  );
}
