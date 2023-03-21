import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { sidebar } from "../utils/sidebar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {sidebar.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
