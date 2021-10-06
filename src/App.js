import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Login, Register, UserList } from "./Component";
import './App.css';
export default function App () {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login } />
      <Route path="/register" component={Register} />
      <Route path="/users" component={UserList} />
    </Switch>
    </BrowserRouter>
  );
};
