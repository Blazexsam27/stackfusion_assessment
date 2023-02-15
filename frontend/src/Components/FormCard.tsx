import "./FormCard.css"

function FormCard(props: any) {
    const {username, email, phoneNo, dob} = props;
    const date = new Date(dob)
  return (
    <div className="card-container" key={username}>
        <p className="header">Name: {username}</p>
        <p className="sub-header">Email: {email}</p>
        <p className="sub-header">PhoneNo: {phoneNo}</p>
        <p className="sub-header">DOB: {date.toLocaleDateString()}</p>
    </div>
  )
}

export default FormCard