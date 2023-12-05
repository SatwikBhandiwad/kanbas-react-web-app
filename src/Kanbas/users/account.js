import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/signin");
    };


    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input className="form-control mb-3" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input className="form-control mb-3" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input className="form-control mb-3" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input className="form-control mb-3" value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input className="form-control mb-3" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br />
                    <button className="btn btn-primary mt-3" onClick={save}>
                        Save
                    </button>
                    <br/>
                    <button className="btn btn-danger mt-3" onClick={signout}>
                        Signout
                    </button>
                    <br />
                    <Link to="/Kanbas/admin/users" className="mt-3 btn btn-warning">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;

