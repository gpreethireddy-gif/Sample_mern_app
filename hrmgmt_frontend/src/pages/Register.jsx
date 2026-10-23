
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Register(){
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [rule, setRule] = useState("Employee")

    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handleRegister=(event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com" && password=="admin"){
            navigate("/login")
        }
        else{
            setError("Invalid email,password")
        }
    }
    return(
    <div>
        <form onSubmit={handleRegister}>

            <select value={rule} onChange={(e) => setRule(e.target.value)}>
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
            </select><br />

            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter username"></input><br/>
            <input type="text" onChange={(e)=>setEmailid(e.target.value)} value={emailid} placeholder="Enter emailid"></input><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password"></input><br/>
            <button type="submit">Register</button>
        </form>
    </div>
    )
}

export default Register