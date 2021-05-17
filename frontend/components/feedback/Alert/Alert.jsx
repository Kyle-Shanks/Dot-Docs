import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex';
import { StyledComponent, AlertIcon } from './Alert.styled';

const TYPE = ['error', 'warning', 'info', 'success'];

const typeIconMap = {
    error: 'CircleAlert',
    warning: 'CircleAlert',
    info: 'CircleInfo',
    success: 'CircleCheck',
};

const Alert = ({ className, children, type, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Alert';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            type={type}
            {...styleProps}
        >
            <AlertIcon icon={typeIconMap[type]} type={type} />
            <Flex>
                {children}
            </Flex>
        </StyledComponent>
    );
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.oneOf(TYPE),
};

Alert.defaultProps = {
    className: '',
    children: null,
    type: 'info',
};

export default Alert;
