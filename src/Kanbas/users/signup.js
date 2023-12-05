import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="mt-4 ms-4">
      <h1>Signup for Kanbas</h1>
      <label for="username">Username:</label>
      <input id="username" className="form-control" style={{width: 300}} value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <br/>
      <label for="password"> Password:</label>
      <input type="hidden" id="password" className="form-control" style={{width:300}} value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <br/>
      <button className="btn btn-success" onClick={signup}>
        Signup
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
export default Signup;

