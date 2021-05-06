import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, TextInput } from 'frontend/components/input';
import { Container, Flex } from 'frontend/components/layout';
import { Header, Icon } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { LIGHT } from 'frontend/styles/themes';
import linkConfig from './sidebarLinkConfig';
import { StyledContainer, MenuLink } from './Sidebar.styled';

const BASE_CLASS_NAME = 'Sidebar';

const Sidebar = ({ className, theme, toggleTheme }) => {
    const history = useHistory();
    const [linkFilter, setLinkFilter] = useState('');
    const pathname = history.location.pathname;

    const goToPath = (path) => {
        if (pathname !== path) history.push(path);
    }

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Flex align="center" justify="space-between" margin={`0 ${SPACING.m} ${SPACING.s}`}>
                <Flex align="center" gap={SPACING.xs}>
                    {/* <Icon icon="Bolt" size="l" /> */}
                    <Header tag="h3">Dot</Header>
                </Flex>
                <Button size="icon" variation="tertiary" onClick={toggleTheme}>
                    <Icon icon={theme === LIGHT ? 'Moon' : 'Sun'} />
                </Button>
            </Flex>
            <TextInput
                value={linkFilter}
                placeholder="Search..."
                margin={`0 ${SPACING.m} ${SPACING.l}`}
                onChange={(val) => { setLinkFilter(val); }}
                variation="filled"
            />

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
    toggleTheme: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
