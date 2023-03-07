 import { Link,useLocation } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
     {useLocation().pathname==="/"&& <div>
      <p>Copyright &copy; 2023</p>
      <Link to="/about">About</Link>
      </div>}
    </footer>
  )
}

export default Footer