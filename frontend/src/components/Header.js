import Button from "./Button"
import { useLocation } from "react-router-dom"
const Header = ({title,onAdd,showAdd}) =>
 {
  const location=useLocation()

  return (
    <header className="header">
      <h1 style={{color:"darkblue"}}>{title}</h1>
      {location.pathname==="/"&&<Button buttonColor={showAdd?"rgb(155,30,40)":"green"} onclickEvent={onAdd} text={showAdd?"Close":"Add"}/>}
    </header>
  )
}

Header.defaultProps={
  title: "Default Task Tracker"
}
export default Header

// Rather than props, directly curly braces can  be used in the function.