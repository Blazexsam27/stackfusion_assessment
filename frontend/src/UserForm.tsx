import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { submitUserForm } from './userServices';
import DatePicker from 'react-date-picker';
import { send } from 'emailjs-com';
import "./UserForm.css";

function UserForm() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    phoneNo: "",
    username: "",
    dob: ""
  });
  const [toSend, setToSend] = useState({
    from_name: 'stackfusion',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState(new Date());

  const handleFormSubmit = async (event:any) => {
    event.preventDefault();
    
    if (errors["email"] === "" && errors["phoneNo"] === "" && errors["username"] === "" && errors["dob"] === "") {
      setToSend({...toSend, message: "Thanks for your response"})
      const response = await submitUserForm({username, email, phoneNo, dob});
      console.log(await response.json())
      send("service_jdcx33t", "template_4ansr7c", toSend, "2XQzYH1b7ei2keqKz")
      navigate("/forms");
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setToSend({...toSend, to_name: event.target.value})
    let msg  = "";
    if (/\S+@\S+\.\S+/.test(event.target.value)) msg = "";
    else msg ="Invalid Email";
    setErrors(prevState => {
      return {...prevState, email: msg}
    })
  };

  const handleUsernameChange = (event: any) => {
    let msg  = "";
    if(event.target.value.length < 3){
      msg = "User name must be atleast 3 characters long"
    }
    else msg = "";
    setErrors(prevState => {
      return {...prevState, username: msg}
    })
      
    setUsername(event.target.value);
  }

  const handlePhoneNoChange = (event: any) => {
    let msg = "";
    if(event.target.value.length < 10) msg = "Phone number must be 10 characters long";
    else msg = "";
    setErrors(prevState => {
      return {...prevState, phoneNo: msg}
    })
    setPhoneNo(event.target.value);
  }

  const handleDob = (date: Date) => {
    const today = new Date();
    const dob = new Date(date);
    let msg = ""
    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
  }
  if(age < 18)
    msg = "Age must be atleast 18 years";
  else msg = "";
  setErrors(prevState => {
    return {...prevState, dob: msg}
  })
    setDob(date);
  }

  return (
    <div className="userform-container">
      <h1 className="signup-form-heading">User Form</h1>

      <form onSubmit={handleFormSubmit}  
      action="https://formspree.io/f/mknajady"
      method="POST">
        <div className="form-text">
          <span>Username:</span>
          <input
            type="text"
            id="username"
            onChange={handleUsernameChange}
            value={username}
            required
            autoComplete="off"
          />
          <label htmlFor="username"></label>
          <span className="error-text" style={{ color: "red" }}>
            {errors["username"]}
          </span>
          <br />
        </div>
        <div className="form-text">
        <span>Email:</span>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            required
            autoComplete="off"
          />
          <span className="error-text" style={{ color: "red" }}>
            {errors["email"]}
          </span>
          <br />
        </div>

        <div className="form-text">
        <span>Phone No:</span>
          <input
            type="text"
            id="phoneNo"
            onChange={handlePhoneNoChange}
            value={phoneNo}
            required
            autoComplete="off"
          />
          <span className="error-text" style={{ color: "red" }}>  
            {errors["phoneNo"]}
          </span>
          <br />
        </div>
        <div className='form-text'>
          <span >DOB:</span>
        <DatePicker onChange={handleDob} value={dob}/>

          <div className="error-text" style={{ color: "red" }}>
            {errors["dob"]}
          </div>
        </div>
        <input className='submit-btn' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserForm;
