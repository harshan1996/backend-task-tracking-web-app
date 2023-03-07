import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [taskName,setTask]=useState("")
    const [Time,setDay]=useState("")
    const [reminder,setReminder]=useState(false)

    const onSubmitTask=(e)=>{
        e.preventDefault()
        if (!taskName){
            alert("Please add a task")
            return
        }

        const date= new Date(Time)
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        const time = `${formattedDate}, ${formattedTime}`;
        onAdd({taskName,time,reminder})
        setTask("")
        setDay("")
        setReminder(false)
    }
    
  return (
    <form className="add-form" onSubmit={onSubmitTask}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add task" value={taskName} onChange={(e)=>{setTask(e.target.value)}}/>
        </div>
        

        <div className="form-control">
            <label>Day and Time</label>
            <input type="datetime-local" placeholder="Add Day and Time" value={Time} onChange={(e)=>{setDay(e.target.value)}}/>
        </div>

        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type="checkbox" checked={reminder} placeholder="Add Reminder" value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
        </div>
        <button className="btn btn-block" type="submit">Save Task</button>

    </form>
  )
}

export default AddTask