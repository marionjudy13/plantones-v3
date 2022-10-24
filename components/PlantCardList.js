import PlantCard from "./PlantCard";

export default function PlantCardList(props) {
  return (
    <section class="hidden lg:block lg:w-1/4 overflow-y-auto h-full">
      {props.items.map((card) => {
        return <PlantCard key={card._id} {...card} />;
      })}
    </section>
  );
}
