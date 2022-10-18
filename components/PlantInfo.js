export default function PlantInfo({ name, scientificName, lightReq, funFacts }) {
    return (
        <section class="border border-fuchsia-500 p-14 sm:p-20 md:p-10 w-full md:w-3/5 lg:w-2/5">  
            <h1 class="text-2xl font-black uppercase sm:text-3xl">{name}</h1>
            <h1 class="text-xl sm:text-2xl mb-3">{scientificName}</h1>
            <p>{lightReq.lightType}</p>
            {console.log(funFacts)}
        </section>
    )
}