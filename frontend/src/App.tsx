import UserForm from "./UserForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AllForms from "./AllForms"
import ErrorPage from "./ErrorPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserForm/>}>
      </Route>
      <Route path="/forms" element={<AllForms/>}>
      </Route>
      <Route path="*" element={<ErrorPage/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
