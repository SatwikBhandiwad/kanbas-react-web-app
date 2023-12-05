import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  
  const navigate = useNavigate();
  const signin = async () => {
    let res = await client.signin(credentials);
    if(res){
      navigate("/Kanbas/Account");
    }
    else{
      setErrorMsg("Invalid Username or Password")
    }

  };
  return (
    <div className="ms-4 mt-4">
      <h1>Signin to Kanbas</h1>
      <label for="username">Username:</label>
      <input id="username" className="form-control" style={{width: 300}} value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <br/>
      <label for="password"> Password:</label>
      <input type="password" id="password" className="form-control" style={{width:300}} value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <br/>
      <button className="btn btn-success" onClick={signin}> Signin </button>
      {errorMsg?<h6>{errorMsg}</h6>:""}
      <br/>
      <br/>
      <h6>Not a registered user? Signup here: 
        <a className="btn btn-primary ms-2" href="#/signup"> Signup</a>
      </h6>
    </div>
  );
}
export default Signin;