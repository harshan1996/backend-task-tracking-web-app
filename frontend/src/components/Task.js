import {FaTimes} from "react-icons/fa"


const Task=({taskFromTasks,ondelete,ondoubleclick})=>{
    return(
        <div className="task" onDoubleClick={()=>ondoubleclick(taskFromTasks._id)}>
            <h4 >{taskFromTasks.taskName } <FaTimes style={{color:"red",cursor:"pointer",float:"right"}} onClick={()=>ondelete(taskFromTasks._id)}/></h4>
            <p>{taskFromTasks.time}</p>
        </div>
    )

}
export default Task