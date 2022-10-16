import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../utils/client";

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Grid({ props }) {
    return (
        <div>
            {props.length > 0 && (
            <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
                {props.map((plant) => (
                <Link href={`/plants/${plant.slug}`}
                    key={plant._id}> 
                    <a 
                        class="bg-no-repeat bg-cover bg-green-500 border-solid border border-black aspect-w-1 aspect-h-1"
                        style={{
                            backgroundColor: plant.hexCode,
                            backgroundImage: plant.plantImage
                    ? `url('${urlFor(plant.plantImage).width(400).height(400).fit("crop")}')`
                    : undefined,
                        }}
                        >
                        <p class="flex justify-center items-center text-center text-white">{plant?.commonName}</p>
                        </a>
                </Link>
                ))}
            </div>
            )}
        </div>
    )
}