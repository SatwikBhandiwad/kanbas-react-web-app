import Labs from './Labs';
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Signin from './Kanbas/users/signin';

import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import UserTable from './Kanbas/users/table';
import Signup from './Kanbas/users/signup';



function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Navigate to="/signin" />} />
          {/* <Route path="/" element={<Navigate to="/Kanbas/" />} /> */}
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Kanbas/admin/users" element={<UserTable/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
