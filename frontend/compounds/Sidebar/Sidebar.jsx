import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import linkConfig from './sidebarLinkConfig';
import { StyledContainer, MenuLink } from './Sidebar.styled';

const BASE_CLASS_NAME = 'Sidebar';

const Sidebar = ({ className }) => {
    const history = useHistory();
    const pathname = history.location.pathname;
    const goToPath = (path) => {
        if (pathname !== path) history.push(path);
    }

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h4">Dot Audio Library</Header>
            <Text margin={`0 0 ${SPACING.l}`}>Search bar here</Text>

            <Container
                className={`${BASE_CLASS_NAME}_link-container`}
                vGap={SPACING.m}
            >
                {linkConfig.map((linkSection) => (
                    <Container key={`linkSection-${linkSection.label}`}>
                        <Header tag="h5" margin={`0 ${SPACING.m} ${SPACING.s}`}>
                            {linkSection.label}
                        </Header>
                        <Container>
                            {linkSection.links.map((link) => (
                                <MenuLink
                                    key={`linkSection-${linkSection.label}-link-${link.label}`}
                                    active={pathname === `${linkSection.path}${link.path}`}
                                    onClick={() => goToPath(`${linkSection.path}${link.path}`)}
                                >
                                    {link.label}
                                </MenuLink>
                            ))}
                        </Container>
                    </Container>
                ))}
            </Container>
        </StyledContainer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
