import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
    <div style={{width: "100vw", fontSize:"3rem", textAlign:"center"}}>404 ErrorPage</div>
    <div style={{width: "100vw", fontSize:"2rem", textAlign:"center"}}><NavLink to={"/"} >Home</NavLink></div>
    
    </>
  )
}

export default ErrorPage