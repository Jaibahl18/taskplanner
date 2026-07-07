import { Square , SquareCheckBig, SquareArrowDown,SquareArrowUp, Trash} from "lucide-react";

const TaskComponent = (props) => {
    const {index, content, isCompleted, onDel, onUp, onDown,onComplete} = props;
    return (
        <div className="flex py-2 my-2 border-1  rounded-md px-2">
            <div className="border-1" onClick={onComplete(index)}>{isCompleted ? <SquareCheckBig size={48} />:<Square size={48} /> }</div>
            <div className="border-1 text-xl flex justify-center items-center flex-1">{content}</div>
            <div className="flex justify-center gap-2">
            <div className="border-1 " onClick={onDown(index)}> <SquareArrowDown size={48} /></div>
            <div className="border-1 " onClick={onUp(index)}> <SquareArrowUp size={48}/></div>
            <div className="border-1 " onClick={onDel(index)}><Trash size={48}/></div>
            </div>
            
      </div>
    );
};


export default TaskComponent;