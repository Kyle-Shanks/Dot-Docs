import {
    OVERVIEW_PATH,
    EXAMPLES_PATH,
    COMPONENTS_PATH,
    CORE_PATH,
    EFFECTS_PATH,
    INSTRUMENTS_PATH,
    SOURCES_PATH,
} from 'frontend/util/constants';

const sidebarLinkConfig = [
    {
        label: 'Getting Started',
        path: '',
        links: [
            {
                label: 'Overview',
                path: OVERVIEW_PATH,
            },
            {
                label: 'Examples',
                path: EXAMPLES_PATH,
            },
        ],
    },
    {
        label: 'Core',
        path: CORE_PATH,
        links: [
            {
                label: 'Channel Merger',
                path: '/channel-merger',
            },
            {
                label: 'Channel Splitter',
                path: '/channel-splitter',
            },
            {
                label: 'Compressor',
                path: '/comporessor',
            },
            {
                label: 'Convolver',
                path: '/convolver',
            },
            {
                label: 'Delay',
                path: '/delay',
            },
            {
                label: 'Filter',
                path: '/filter',
            },
            {
                label: 'Gain',
                path: '/gain',
            },
            {
                label: 'Stereo Panner',
                path: '/stereo-panner',
            },
            {
                label: 'Wave Shaper',
                path: '/wave-shaper',
            },
        ],
    },
    {
        label: 'Components',
        path: COMPONENTS_PATH,
        links: [
            {
                label: 'Envelope',
                path: '/envelope',
            },
            {
                label: 'Filter Envelope',
                path: '/filter-envelope',
            },
            {
                label: 'Gain Envelope',
                path: '/gain-envelope',
            },
        ],
    },
    {
        label: 'Sources',
        path: SOURCES_PATH,
        links: [
            {
                label: 'Buffer Source',
                path: '/buffer-source',
            },
            {
                label: 'Constant Source',
                path: '/constant-source',
            },
            {
                label: 'LFO',
                path: '/lfo',
            },
            {
                label: 'Noise Generator',
                path: '/noise-generator',
            },
            {
                label: 'Oscillator',
                path: '/oscillator',
            },
            {
                label: 'Signal Generator',
                path: '/signal-generator',
            },
        ],
    },
    {
        label: 'Instruments',
        path: INSTRUMENTS_PATH,
        links: [
            {
                label: 'FM Synth',
                path: '/fm-synth',
            },
            {
                label: 'Mono Synth',
                path: '/mono-synth',
            },
            {
                label: 'Osc',
                path: '/osc',
            },
            {
                label: 'Poly Synth',
                path: '/poly-synth',
            },
            {
                label: 'Simple FM Synth',
                path: '/simple-fm-synth',
            },
            {
                label: 'Synth',
                path: '/synth',
            },
        ],
    },
    {
        label: 'Effects',
        path: EFFECTS_PATH,
        links: [
            {
                label: 'Chorus',
                path: '/chorus',
            },
            {
                label: 'Distortion',
                path: '/distortion',
            },
            {
                label: 'EQ2',
                path: '/eq2',
            },
            {
                label: 'Feedback Delay',
                path: '/feedback-delay',
            },
            {
                label: 'Flanger',
                path: '/flanger',
            },
            {
                label: 'Limiter',
                path: '/limiter',
            },
            {
                label: 'Ping Pong Delay',
                path: '/ping-pong-delay',
            },
            {
                label: 'Reverb',
                path: '/reverb',
            },
        ],
    },
];

export default sidebarLinkConfig;
