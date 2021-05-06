import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, TextInput } from 'frontend/components/input';
import { Container, Flex } from 'frontend/components/layout';
import { Header, Icon, Text } from 'frontend/components/typography';
import { SPACING, FONT_SIZE } from 'frontend/styles/constants';
import { LIGHT } from 'frontend/styles/themes';
import linkConfig from './sidebarLinkConfig';
import { StyledContainer, Logo, LinkContainer, MenuLink } from './Sidebar.styled';

const BASE_CLASS_NAME = 'Sidebar';

// TODO: Add logic for link filtering

const Sidebar = ({ className, theme, toggleTheme }) => {
    const history = useHistory();
    const [linkFilter, setLinkFilter] = useState('');
    const pathname = history.location.pathname;

    const goToPath = (path) => {
        if (pathname !== path) history.push(path);
    }

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Container
                className={`${BASE_CLASS_NAME}_info-container`}
                padding={`${SPACING.l} 0`}
            >
                <Flex align="center" justify="space-between" margin={`0 ${SPACING.m} ${SPACING.s}`}>
                    <Flex align="baseline" gap={SPACING.xs}>
                        {/* <Icon icon="Bolt" size="l" /> */}
                        <Logo tag="h3" onClick={() => goToPath('/')}>Dot</Logo>
                        <Text fontSize={FONT_SIZE.ml}>v0.1.0</Text>
                    </Flex>
                    <Button size="icon" variation="tertiary" onClick={toggleTheme}>
                        <Icon icon={theme === LIGHT ? 'Moon' : 'Sun'} />
                    </Button>
                </Flex>
                <TextInput
                    value={linkFilter}
                    placeholder="Search..."
                    margin={`0 ${SPACING.m}`}
                    onChange={(val) => { setLinkFilter(val); }}
                    variation="filled"
                />
            </Container>

            <LinkContainer
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
            </LinkContainer>
        </StyledContainer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
