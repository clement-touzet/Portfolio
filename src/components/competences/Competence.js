import { Chip } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Competence = ({
    label
}) => {
    return (
        <div>
            <Chip label={label}></Chip>
        </div>
    );

};

Competence.propTypes = {
    label: PropTypes.string
  };
  

export default Competence;