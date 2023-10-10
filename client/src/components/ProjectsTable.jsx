import React, { useContext, useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Grid,
  Paper,
  Avatar,
  Button,
  Typography,
  Link,
  FormControlLabel,
  TextField,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

// import background from '../../../public/do i want a background picture?';
// import MyProjectListItem from "./User/MyProjectListItem";
import { useTheme } from "@mui/material/styles";

import { userContext } from "../providers/UserProvider";
import { projectContext } from "../providers/ProjectProvider";



const ProjectTable = (props) => {
  const { whichProjects } = props;
  const { project, myProjects, addProject, selectProject, fetchMyProjects } =
    useContext(projectContext);
  const { loggedinUser, selectUser, findUserInfo } = useContext(userContext);

  const params = useParams();
  const navigate = useNavigate();
  const theme = useTheme();


  // useEffect(() => {
  //   selectUser(params.id);
  //   fetchMyProjects(params.id);
  // }, [params]);
  console.log("WHICH?", whichProjects);
  whichProjects.map((row) => console.log("this is a row", row));

  const handleProjectClick = async (name) => {
    await selectProject(name);
    navigate(`/projectboard/${id}`);
  };

  return (

    <Box sx={{ m: 10, justifyContent: "center" }}>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#a3a2a9" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Due&nbsp;Date</TableCell>
              <TableCell align="right">Owner</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {whichProjects.map((row) => (

              <TableRow
                key={row.project_name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: "darkred" }}
                  onClick={() => navigate(`/projectboard/${row.project_id}`)}
                >
                  <KeyboardDoubleArrowRightIcon />
                </TableCell>

                <TableCell align="right">{row.project_name}</TableCell>
                <TableCell align="right">{row.project_description}</TableCell>
                <TableCell align="right">{row.project_due_date}</TableCell>
                {/* how can we format this date better? */}
                <TableCell align="right">{row.owner_username}</TableCell>

                <TableCell align="left">
                  <Avatar alt="LHL" src={row.owner_avatar}
                    sx={{ width: 30, height: 30 }}
                  />
                </TableCell>

              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ProjectTable;