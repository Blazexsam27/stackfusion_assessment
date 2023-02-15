const submitUserForm = async (data : {username: String, email: String, dob: Date, phoneNo:String}) => {
    const response = await fetch("/api/users/submitform", 
    {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            dob: data.dob,
            phoneNo: data.phoneNo
        })
    })
    return response;
}

const getAllForms = async () => {
    return await fetch("/api/users/getForms", {method: "GET"});
}

export {submitUserForm, getAllForms}