import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const ProgressBar = props => {
    const {value, max} = props;

    return (
        <>
            <progress value={value} max={max} />
            <span className="valueBar">{(value/max)*100}%</span>
        </>
    )
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,

};

ProgressBar.defaultProps = {
    max: 100,

};

export default ProgressBar;