import React from "react";
import useId from "../hooks/useId";
import Home from '../components/Home'
import Teachers from '../components/Teachers'
import Students from '../components/Students'
import Courses from '../components/Courses'
import Groups from '../components/Groups'
import Calculation from '../components/Calculation'
import Settings from '../components/Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import {faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import {faGear} from '@fortawesome/free-solid-svg-icons';

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
    element: <Students />,
    title: "O'quvchilar",
    path: "/students",
    icon: <FontAwesomeIcon icon={faUserGraduate} />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Teachers />,
    title: "O'qituvchilar",
    path: "/teachers",
    icon: <FontAwesomeIcon icon={faChalkboardUser} />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Courses />,
    title: "Kurslar",
    path: "/courses",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Groups />,
    title: "Guruhlar",
    path: "/groups",
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Calculation />,
    title: "Ish haqi",
    path: "/calculation",
    icon: <FontAwesomeIcon icon={faCalculator} />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Settings />,
    title: "Sozlamalar",
    path: "/settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    private: false,
    hidden: false,
  },
];
