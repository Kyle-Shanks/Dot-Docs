import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Link } from 'react-router-dom';

import Button from 'frontend/components/input/Button';
import Container from 'frontend/components/layout/Container';
import Header from 'frontend/components/typography/Header';
import Icon from 'frontend/components/typography/Icon';
import Text from 'frontend/components/typography/Text';
import { SPACING, FONT_SIZE } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'SplashPage';

const SplashPage = ({ className, match, toggleTheme }) => {
    const section = match.params.section;

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Container padding={SPACING.l}>
                <Header tag="h2">Splash Page</Header>

                <Text margin={`0 0 ${SPACING.m}`} align="justify" variation="secondary">
                    Fakebit chip music atari sequencer magfest famitracker dmg circuit bending wav channel blip blop analog software. 2a03 aesthetic slamdunk lifestyle anamanaguchi glitch lofi 16-bit blip blop nes magfest moe moe kyunstep amiga software arpeggio. Sequencer ymck lsdj amiga blip fest 16-bit hexadecimal dmg arpeggio trash80 nintendocore circuit bending. Analog video game pulse wave chipsters blip blop chip music triangle wave bweeew circuit bending 2a03 atari aesthetic tracker slamdunk lifestyle 16-bit.
                </Text>

                <Button size="icon" onClick={toggleTheme}>
                    <Icon icon="Bolt" />
                </Button>
            </Container>
        </div>
    );
};

SplashPage.propTypes = {
    className: PropTypes.string,
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        params: PropTypes.shape({
            section: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

SplashPage.defaultProps = {
    className: '',
};

export default withRouter(SplashPage);
