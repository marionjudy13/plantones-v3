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
            <div class="relative grid gap-4 grid-cols-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-5">
                {props.map((plant) => (
                <div key={plant._id} class="border-solid border border-black aspect-w-1 aspect-h-1 flex items-center justify-center z-10 group overflow-hidden">
                    <Link href={`/plants/${plant.slug}`}> 
                            <a 
                                class="bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: plant.plantImage
                                    ? `url('${urlFor(plant.plantImage).width(400).height(400).fit("crop")}')`
                                    : undefined,
                                }}
                            >   
                                <div
                                    style={{backgroundColor: plant.hexCode}} 
                                    class="shadow-md shadow-black/20 opacity-0 ease-in-out duration-300 group-hover:opacity-100 flex justify-center items-center h-10 absolute -top-10 group-hover:top-0 w-full">
                                    <div class="text-sm text-white font-medium uppercase mt-2 mb-1">{plant.commonName}</div>
                                </div>
                            </a>
                    </Link>
                </div>
                ))}
            </div>
            )}
        </div>
    )
}