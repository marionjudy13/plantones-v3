import BlockContent from "@sanity/block-content-to-react"

export default function PlantInfo({ name, scientificName, lightReq, funFacts }) {
    return (
        <section class="border-l border-black p-14 sm:p-20 md:p-10 md:w-3/5 md:overflow-auto md:h-full lg:w-1/2">  
            <h1 class="text-2xl font-black uppercase sm:text-3xl">{name}</h1>
            <h1 class="text-xl sm:text-2xl mb-3">{scientificName}</h1>
            <p class="mb-5">{lightReq.lightType}</p>
            <hr class="mb-5" />
            <BlockContent blocks={funFacts} />
        </section>
    )
}