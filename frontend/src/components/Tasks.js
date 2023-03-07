import Task from "./Task"

const Tasks = ({Tasks,ondelete,ondoubleclick}) => {
    
    return (
        <div>
            {Tasks.map((data,index)=>(
               <Task key={index} taskFromTasks={data} ondelete={ondelete} ondoubleclick={ondoubleclick}/>
            ))}
        </div>
    )

}
export default Tasks