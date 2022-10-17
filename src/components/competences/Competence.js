import { Box, Chip } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Competence = ({
    competence,handleClickChip
}) => {
    return (
        <Box sx={{
            margin:"3px"
        }}>
            <Chip color="primary" label={competence} onClick={handleClickChip(competence)} />
        </Box>
    );

};

Competence.propTypes = {
    competence: PropTypes.string,
    handleClickChip: PropTypes.func
  };
  

export default Competence;