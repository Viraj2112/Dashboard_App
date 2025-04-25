import { TrendingUp } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Card({id, title, icon, amount, percentage}) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

    return (
        <>
        <div className="card touch-none" ref={setNodeRef} {...attributes} {...listeners} style={{transform: CSS.Transform.toString(transform), transition}} >
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            {icon}
                        </div>
                        <p className="card-title">{title}</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{amount}</p>
                        <span className="flex w-fit items-center self-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            {percentage}
                        </span>
                    </div>
                </div>
        </>
    );
}

export default Card;