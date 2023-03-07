import { Link } from "react-router-dom" // alternative for <a> tag

const About=()=>{
    return <div><br />
        <p>This is a full-stack web application built using the React <b>18.2.0</b> on the frontend and flask on the backend.</p><br/>
        <Link style={{textAlign:"center"}} to="/">back</Link>
    </div>
}

export default About