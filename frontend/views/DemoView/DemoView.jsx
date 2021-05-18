import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Dot from 'dot-audio';
import { Editor } from 'frontend/components/data';
import { Container } from 'frontend/components/layout';
import { Header } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { FadeContainer } from 'frontend/views/views.styled';
import { DemoContainer, Keyboard, WhiteKeys, BlackKeys, Key } from './DemoView.styled';

const BASE_CLASS_NAME = 'DemoView';

// DOM Functions
const addClass = (el, str) => {
    if (el.className.includes(str)) return;
    el.className += ` ${str}`;
};
const removeClass = (el, str) => {
    if (!el.className.includes(str)) return;
    el.className = el.className.replace(` ${str}`, '');
};

const demoCode = `const AC = new AudioContext()
const synth = new Dot.PolySynth(
    AC,
    {
        waveform: 'square',
        filterFrequency: 0,
        filterAmount: 1000,
        filterDecay: 0.4,
        filterSustain: 0,
        filterRelease: 0.1,
    }
)
const reverb = new Dot.Reverb(AC, { amount: 0.15 })

Dot.chain(synth, reverb, AC.destination)

const keyboard = new Dot.Keyboard({
    onPress: (noteInfo, e) => {
        if (AC.state === 'suspended') AC.resume()
        synth.noteOn(\`\${ noteInfo.note }\${ noteInfo.octave }\`)
    },
    onRelease: (noteInfo, e) => {
        synth.noteOff(\`\${ noteInfo.note } \${ noteInfo.octave }\`)
    },
})

keyboard.on()`;

const DemoView = ({ className }) => {
    const AC = new AudioContext();
    const synth = new Dot.PolySynth(
        AC,
        {
            waveform: 'square',
            filterFrequency: 0,
            filterAmount: 1000,
            filterDecay: 0.4,
            filterSustain: 0,
            filterRelease: 0.1,
        }
    );
    const reverb = new Dot.Reverb(AC, { amount: 0.15 });
    const analyser = AC.createAnalyser();

    Dot.chain(synth, reverb, AC.destination);
    reverb.connect(analyser);

    const keyboard = new Dot.Keyboard({
        onPress: (noteInfo, e) => {
            if (AC.state === 'suspended') AC.resume();

            addClass(document.getElementById(e.key), 'active');
            synth.noteOn(`${noteInfo.note}${noteInfo.octave}`);
        },
        onRelease: (noteInfo, e) => {
            removeClass(document.getElementById(e.key), 'active');
            synth.noteOff(`${noteInfo.note}${noteInfo.octave}`);
        },
    });

    useEffect(() => {
        keyboard.on();
        return keyboard.off;
    }, []);

    return (
        <FadeContainer>
            <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
                <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Demo</Header>
                <Container vGap={SPACING.m}>
                    <DemoContainer>
                        <Keyboard>
                            <WhiteKeys>
                                <Key id="a">A</Key>
                                <Key id="s">S</Key>
                                <Key id="d">D</Key>
                                <Key id="f">F</Key>
                                <Key id="g">G</Key>
                                <Key id="h">H</Key>
                                <Key id="j">J</Key>
                                <Key id="k">K</Key>
                                <Key id="l">L</Key>
                                <Key id=";">:</Key>
                            </WhiteKeys>
                            <BlackKeys>
                                <div className="space"></div>
                                <Key id="w">W</Key>
                                <Key id="e">E</Key>
                                <div className="big-space"></div>
                                <Key id="t">T</Key>
                                <Key id="y">Y</Key>
                                <Key id="u">U</Key>
                                <div className="big-space"></div>
                                <Key id="o">O</Key>
                                <Key id="p">P</Key>
                                <div className="space"></div>
                            </BlackKeys>
                        </Keyboard>
                    </DemoContainer>
                    <Editor content={demoCode} />
                </Container>
            </Container>
        </FadeContainer>
    );
};

DemoView.propTypes = {
    className: PropTypes.string,
};

DemoView.defaultProps = {
    className: '',
};

export default DemoView;
