import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Menu.styled';

// TODO: Add handler for then parent is close to the bottom to more menu position to above

const Menu = ({
    className,
    children,
    onClose,
    open,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Menu';

    // Handling closing the dropdown when clicking outside of the component
    const containerRef = useRef();
    const handleClick = e => {
        if (open && document.contains(e.target) && !containerRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            open={open}
            ref={containerRef}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

Menu.defaultProps = {
    className: '',
    children: null,
    open: false,
};

export default Menu;
