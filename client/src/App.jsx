import React, { useState, useContext } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { Box } from "@mui/material";

import Header from "./components/Header";
import ColumnList from "./components/ColumnList";
import StartNewProject from "./components/StartProject/StartNewProject";
import NewTasksForm from "./components/NewTasksForm";
import Login from "./components/User/Login";
import MyProjectsList from "./components/User/MyProjectsList";
import ErrorPage from "./components/ErrorPage";
import background from '../public/lots-of-lenses.jpg';

import UserProvider from "./providers/UserProvider";
import ColumnsProvider from "./providers/ColumnsProvider";
import ProjectProvider from "./providers/ProjectProvider";
// import { columnsContext } from "./providers/ColumnsProvider";
// import CustomThemeProvider from './providers/ThemeProvider';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(4);

  const setView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <ColumnList />;
      case 2:
        return <StartNewProject setView={setView} />;
      case 3:
        return <NewTasksForm />; //this is not being used afterall
      case 4:
        return <Login setView={setView} />;
      case 5:
        return <MyProjectsList setView={setView} />;
      default:
        return <Login />;
    }
  };

  <Link to="/myProjects">My Projects</Link>;

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       light: '#e4e1df',
  //       main: '#dedad7',
  //       dark: '#9b9896',
  //       contrastText: '#fff',
  //     },
  //     secondary: {
  //       light: '#e53637',
  //       main: '#df0405',
  //       dark: '#9c0203',
  //       contrastText: '#000',
  //     },
  //   },
  // });

  // useEffect(() => {
  //   const url = 'http://localhost:8080/cats';

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching the data', error);
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <UserProvider setView={setView} >
        <Header setView={setView} />

        <ProjectProvider>
          <ColumnsProvider>
            {/* {ActiveView()} */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/myProjects" element={<MyProjectsList />} />
              <Route path="/projectboard" element={<ColumnList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newProject" element={<StartNewProject />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ColumnsProvider>
        </ProjectProvider>
      </UserProvider>

    </>
  );
}

export default App;
