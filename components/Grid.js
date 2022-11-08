import React, { useState } from 'react';
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
            <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {props.map((plant) => (
                <Link href={`/plants/${plant.slug}`}
                    key={plant._id}> 
                        <a 
                            class="bg-no-repeat bg-cover border-solid border border-black aspect-w-1 aspect-h-1"
                            style={{
                                backgroundImage: plant.plantImage
                                ? `url('${urlFor(plant.plantImage).width(400).height(400).fit("crop")}')`
                                : undefined,
                            }}
                        >   
                            {/* <p class="hidden hover:flex justify-center items-center text-center text-white font-bold	">{plant?.commonName}</p> */}
                            <div class="opacity-0 hover:opacity-25 ease-in-out duration-300" style={{backgroundColor: plant.hexCode}} />
                        </a>
                </Link>
                ))}
            </div>
            )}
        </div>
    )
}