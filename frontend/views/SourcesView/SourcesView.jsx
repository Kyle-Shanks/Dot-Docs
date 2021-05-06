import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'SourcesView';

const SourcesView = ({ className, section }) => (
    <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
        <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Sources View</Header>
        <Text margin={`0 0 ${SPACING.m}`} align="justify">
            Fakebit chip music atari sequencer magfest famitracker dmg circuit bending wav channel blip blop analog software. 2a03 aesthetic slamdunk lifestyle anamanaguchi glitch lofi 16-bit blip blop nes magfest moe moe kyunstep amiga software arpeggio. Sequencer ymck lsdj amiga blip fest 16-bit hexadecimal dmg arpeggio trash80 nintendocore circuit bending. Analog video game pulse wave chipsters blip blop chip music triangle wave bweeew circuit bending 2a03 atari aesthetic tracker slamdunk lifestyle 16-bit.
        </Text>
        <Text margin={`0 0 ${SPACING.m}`} align="justify" variation="secondary">
            Fakebit chip music atari sequencer magfest famitracker dmg circuit bending wav channel blip blop analog software. 2a03 aesthetic slamdunk lifestyle anamanaguchi glitch lofi 16-bit blip blop nes magfest moe moe kyunstep amiga software arpeggio. Sequencer ymck lsdj amiga blip fest 16-bit hexadecimal dmg arpeggio trash80 nintendocore circuit bending. Analog video game pulse wave chipsters blip blop chip music triangle wave bweeew circuit bending 2a03 atari aesthetic tracker slamdunk lifestyle 16-bit.
        </Text>
    </Container>
);

SourcesView.propTypes = {
    className: PropTypes.string,
    section: PropTypes.string.isRequired,
};

SourcesView.defaultProps = {
    className: '',
};

export default SourcesView;
