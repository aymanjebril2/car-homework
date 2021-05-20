import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Models from "./Pages/Models";
import AllModels from "./components/Allmodels/AllModels";

function App() {
  const [add, setAdd] = useState(false);
  const [makeAdded, setMakeAdded] = useState(false);
  const [deletBrand, setDeletBrand] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handelAddNew = () => {
    setAdd((open) => !open);
  };

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home
            setOpenEdit={setOpenEdit}
            setAdd={setAdd}
            setDeletBrand={setDeletBrand}
            setMakeAdded={setMakeAdded}
            handelAddNew={handelAddNew}
            add={add}
            makeAdded={makeAdded}
            deletBrand={deletBrand}
            openEdit={openEdit}
          />
        </Route>
        <Route path="/:title/:id" component={Models} />
      </Switch>
    </div>
  );
}

export default App;
