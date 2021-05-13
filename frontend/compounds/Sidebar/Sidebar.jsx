import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, TextInput } from 'frontend/components/input';
import { Container, Flex } from 'frontend/components/layout';
import { Icon, Text } from 'frontend/components/typography';
import { SPACING, FONT_SIZE } from 'frontend/styles/constants';
import { SPLASH_PATH } from 'frontend/util/constants';
import { LIGHT } from 'frontend/styles/themes';
import linkConfig from './sidebarLinkConfig';
import {
    StyledContainer,
    HeaderLink,
    InfoContainer,
    LinkContainer,
    MenuLink,
} from './Sidebar.styled';

const BASE_CLASS_NAME = 'Sidebar';

const Sidebar = ({ className, theme, toggleTheme }) => {
    const history = useHistory();
    const [linkFilter, setLinkFilter] = useState('');
    const pathname = history.location.pathname;

    const goToPath = (path) => {
        if (pathname !== path) history.push(path);
    };

    const filterLinks = (filterStr) => {
        const str = filterStr.toLowerCase();
        const output = [];

        linkConfig.forEach((section) => {
            if (section.label.toLowerCase().includes(str)) {
                output.push(section);
            } else {
                const outputSection = {
                    ...section,
                    links: section.links.filter(({ label }) => label.toLowerCase().includes(str)),
                };

                if (outputSection.links.length) output.push(outputSection);
            }
        });

        return output;
    };

    const filteredConfig = linkFilter ? filterLinks(linkFilter) : linkConfig;

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <InfoContainer className={`${BASE_CLASS_NAME}_info-container`}>
                <Flex align="center" justify="space-between" margin={`0 ${SPACING.m} ${SPACING.s}`}>
                    <Flex align="baseline" gap={SPACING.xs}>
                        {/* <Icon icon="Bolt" size="l" /> */}
                        <HeaderLink tag="h3" onClick={() => goToPath(SPLASH_PATH)}>Dot</HeaderLink>
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
            </InfoContainer>
            <LinkContainer
                className={`${BASE_CLASS_NAME}_link-container`}
                vGap={SPACING.m}
            >
                {filteredConfig.map((linkSection) => (
                    <Container key={`linkSection-${linkSection.label}`}>
                        <HeaderLink
                            tag="h5"
                            onClick={() => goToPath(linkSection.path || SPLASH_PATH)}
                            margin={`0 ${SPACING.m} ${SPACING.s}`}
                        >
                            {linkSection.label}
                        </HeaderLink>
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
