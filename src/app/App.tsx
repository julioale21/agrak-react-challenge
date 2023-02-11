import * as React from "react";
// import { UserForm } from "../components/forms/UserForm";
import UserListView from "../pages/UserListView";
import UserFormView from "../pages/UserFormView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserListView />} path="/" />
        <Route element={<UserFormView />} path="/user/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
