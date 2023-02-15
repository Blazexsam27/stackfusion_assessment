import { useEffect, useState } from "react";
import { getAllForms } from "./userServices";
import FormCard from "./Components/FormCard";
import { NavLink } from "react-router-dom";
import "./AllForms.css"

function AllForms() {

    const [forms, setForms] = useState([]);

    const getForms = async () => {
        const data = await getAllForms();
        const parsedData = await data.json();
        console.log(parsedData)
        setForms(parsedData.forms);
    }

    useEffect(() => {
        getForms();
    }, [])

    return (
    <div className='container'>
        <p style={{fontSize: "3rem", textAlign:"center"}}>All Forms</p>
        <div className="forms-container">
        {
            forms.length > 1 ? forms.map((item : any)=> {
                return <FormCard username={item.username} email={item.email} phoneNo={item.phoneNo} dob={item.dob}/>
            })
        : ""}</div>
        <NavLink className="home-btn" to={"/"} style={{fontSize: "2rem", textAlign:"center", margin:"10px 0"}}>Home</NavLink>
    </div>
  )
}

export default AllForms