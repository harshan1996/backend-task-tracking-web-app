import { useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';


function App() {
  const [tasksState, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log(tasksFromServer["data"]) 
      console.log(typeof(tasksFromServer["data"])) // this is a string
      setTasks(tasksFromServer["data"])
    }

    getTasks()
  }, [])

  console.log("type of tasksState is:" ,typeof(tasksState))

   // Fetch Tasks
   const fetchTasks = async () => {
    const res = await fetch('https://btt-harshan-web-app.vercel.app/tasks')
    const data = await res.json()
    return data
  }

  // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://127.0.0.1:5002/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }


  //toggle add button
  const [showAddButton, setshowAddButton] = useState(true)

  //AddTask
  const addTask = async (taskFromAdd) => {
    // const id = Math.ceil(Math.random() * 1000)
    const newTask = {taskFromAdd}
    const res = await fetch(`https://btt-harshan-web-app.vercel.app/tasks/post`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
  })
  // If you directly add newTask to the setTasks, if the backend encounters any problem that would be irrelevant to the frontend.
  const newtask= await res.json() // no await results in empty object
  setTasks([...tasksState,newtask["data"]])}
  


  // ID we are getting from Task.js.Frontend will affect the backend and vice-versa.
  const deleteTask =async (ID) => {
    await fetch(`https://btt-harshan-web-app.vercel.app/tasks?id=${ID}`,{method:'DELETE'})

    setTasks(tasksState
      .filter((task) => {
        return task._id !== ID
      }))
  }

  const toggleReminder = (ID) => {
    setTasks(tasksState
      .map((task) => {
        return task._id === ID ? { ...task, reminder: !task.reminder } : task
      }))
  }
  
  return (
    <BrowserRouter>
      <div className="container">
      <Header title="Task Tracker" onAdd={() => { setshowAddButton(!showAddButton) }} showAdd={showAddButton} />
        <Routes>
          <Route path="/" exact element={
            <>
              {showAddButton && <AddTask onAdd={addTask} />}
              {tasksState.length > 0 ? <Tasks Tasks={tasksState} ondelete={deleteTask} ondoubleclick={toggleReminder} /> : " No tasks to display"}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
