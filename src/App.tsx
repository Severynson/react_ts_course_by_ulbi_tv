import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import {Route, Routes, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";

function App() {

  return (
    <>
    <div style={{width: 350, margin: "0 auto"}}>
        <NavLink style={{height: 60, width: 150, background: "blue", padding: 10, margin: 20, color: "#fff"}} to="/todos">Todos</NavLink>
        <NavLink style={{height: 60, width: 150, background: "blue", padding: 10, margin: 20, color: "#fff"}} to="/users">Users</NavLink>
     </div>   
       <Routes>
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/users"} element={<UsersPage />} />
      </Routes>
        <EventsExample />
      <Card
        onClick={(num: number) => console.log("Clicked", num)}
        width="200px"
        height="200px"
        variant={CardVariant.primary}
      >
        <button>Button</button>
      </Card>
      </>
  );
};

export default App;
