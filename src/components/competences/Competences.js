import { Box, Paper } from '@mui/material';
import React from 'react';
import Competence from './Competence';
import DescriptionCompetence from './DescriptionCompetence';

const Competences = () => {
    const competences = [
        "Python",
        "C++",
        "React.js",
        "JavaScript",
        "Node-Red",
        "HTML/CSS",
        
      ];
    return (
        <Box>
            <Paper>
                <Box>

            {competences.map((competence)=> {
                return (<>
                <Competence label={competence}/>
                </>)
            })}
                </Box>
            <DescriptionCompetence />
            </Paper>
        </Box>
    );
};

export default Competences;