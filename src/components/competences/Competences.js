import { Box, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import Competence from "./Competence";
import Python from "./descriptions/Python";

const Competences = () => {
  const [selectedSkill,setSelectedSkill] = useState(<></>)
  const langages = {
    python: { name: "Python", component: (<Python />) },
    cpp: { name: "C++", component: (<Box />) },
    reactJs: { name: "React.js", component: (<Box />) },
    javascript: { name: "JavaScript", component: (<Box />) },
    nodeRed: { name: "Node-Red", component: (<Box />) },
    htmlCss: { name: "HTLM/CSS", component: (<Box />) },
  };
  const competences = [
    langages.python.name,
    langages.cpp.name,
    langages.reactJs.name,
    langages.javascript.name,
    langages.nodeRed.name,
    langages.htmlCss.name,
  ];

  const handleClickChip = (competence) => {
    for (const langage in langages) {
      if (langages[langage].name === competence) {
        setSelectedSkill(langages[langage].component)
      }
    }
  };

  return (
    <Box sx={{width:"80%"}}>
      <Paper elevation={4} sx={{padding : "10px"}}>
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
                <Competence
                  key={competence}
                  competence={competence}
                  handleClickChip={handleClickChip}
                />
            );
          })}
        </Box>
        {selectedSkill}
      </Paper>
    </Box>
  );
};

export default Competences;
