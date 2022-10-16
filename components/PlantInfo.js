export default function PlantInfo({ name, pantone }) {
    return (
        <section class="border border-fuchsia-500">  
            <h1 style={{backgroundColor: pantone,}}>{pantone}</h1>
            <h2>{name}</h2>
        </section>
    )
}