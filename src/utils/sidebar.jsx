import React from "react";
import useId from "../hooks/useId";
import Home from '../components/Home'

export const sidebar = [
  {
    id: useId,
    element: <Home />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Students</h1>,
    title: "O'quvchilar",
    path: "/students",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>O'qituvchilar</h1>,
    title: "O'qituvchilar",
    path: "/teachers",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Courses</h1>,
    title: "Kurslar",
    path: "/courses",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Guruhlar</h1>,
    title: "groups",
    path: "/groups",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Hisob-Kitob</h1>,
    title: "Hisob-kitob",
    path: "/calculation",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Settings</h1>,
    title: "Sozlamalar",
    path: "/settings",
    private: false,
    hidden: false,
  },
];
