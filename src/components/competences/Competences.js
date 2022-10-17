import { Box, Paper } from "@mui/material";
import React from "react";
import Competence from "./Competence";
import DescriptionCompetence from "./DescriptionCompetence";

const Competences = () => {
  const competences = [
    "Python",
    "C++",
    "React.js",
    "JavaScript",
    "Node-Red",
    "HTML/CSS",
  ];

    
const handleClickChip = (competence) => {
    return competence;
}

  return (
    <Box>
      <Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {competences.map((competence) => {
            return (
              <>
                <Competence competence={competence} handleClickChip={handleClickChip}/>
              </>
            );
          })}
        </Box>
        <DescriptionCompetence />
      </Paper>
    </Box>
  );
};

export default Competences;
