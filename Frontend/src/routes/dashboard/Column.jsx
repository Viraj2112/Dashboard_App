import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import Card from "./Card";

function Column({cardInfo}) {
    return (
        <>
            <SortableContext items={cardInfo} strategy={horizontalListSortingStrategy}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cardInfo.map((card) => (<Card key={card.id} id={card.id} title={card.title} icon={card.icon} amount={card.amount} percentage={card.percentage}/>))}
            </div>
            </SortableContext>
        </>
    );
}

export default Column;