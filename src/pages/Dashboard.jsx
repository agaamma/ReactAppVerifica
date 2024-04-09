import { CiLogin as Login } from "react-icons/ci";
import { useState } from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    titolo: "",
    dataDiScadenza: "",
    priorita: ""
  });

  const onChange = e => {
    console.log(e.target.value);
  };

  return (
    <>
      <Header title="Dashbaord" icon={<Login />} to="/login" />
      <Card>
        <div className="w-full flex justify-between items-center">
          <div>
            <h1>Todo Done</h1>
            <h4>keep it up</h4>
          </div>
          <div>{todos.length}</div>
        </div>
      </Card>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="w-2/6">
          <Input type="text" placeholder="Inserisci il task" value={todo.titolo} onChange={onChange} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
