import * as React from "react";
import UserListView from "../pages/UserListView";
import UserManagementView from "../pages/UserManagementView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserListView />} path="/" />
        <Route element={<UserManagementView />} path="/user" />
        <Route element={<UserManagementView />} path="/user/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
