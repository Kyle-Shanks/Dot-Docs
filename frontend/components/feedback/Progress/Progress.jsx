import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent, StyledSvg, BackgroundCircle, ProgressCircle, Label } from './Progress.styled';

const Progress = ({ className, maxProgress, progress, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Progress';
    const percentage = (progress / maxProgress);

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            <StyledSvg tag="svg" viewBox="0 0 80 80">
                <BackgroundCircle
                    tag="circle"
                    cx="40"
                    cy="40"
                    r="35"
                />
                <ProgressCircle
                    tag="circle"
                    cx="40"
                    cy="40"
                    r="35"
                    strokeDasharray="220"
                    strokeDashoffset={220 * (1 - percentage)}
                />
            </StyledSvg>
            <Label>{percentage * 100}%</Label>
        </StyledComponent>
    );
};

Progress.propTypes = {
    className: PropTypes.string,
    progress: PropTypes.number.isRequired,
    maxProgress: PropTypes.number,
};

Progress.defaultProps = {
    className: '',
    maxProgress: 100,
};

export default Progress;
