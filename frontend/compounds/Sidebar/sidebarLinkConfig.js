import {
    OVERVIEW_PATH,
    EXAMPLES_PATH,
    DEMO_PATH,
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
            // {
            //     label: 'Overview',
            //     path: OVERVIEW_PATH,
            // },
            {
                label: 'Examples',
                path: EXAMPLES_PATH,
            },
            {
                label: 'Demo',
                path: DEMO_PATH,
            },
        ],
    },
    {
        label: 'Core',
        path: CORE_PATH,
        links: [
            {
                label: 'DotAudioNode',
                path: '/DotAudioNode',
            },
            {
                label: 'ChannelMerger',
                path: '/ChannelMerger',
            },
            {
                label: 'ChannelSplitter',
                path: '/ChannelSplitter',
            },
            {
                label: 'Compressor',
                path: '/Compressor',
            },
            {
                label: 'Convolver',
                path: '/Convolver',
            },
            {
                label: 'Delay',
                path: '/Delay',
            },
            {
                label: 'Filter',
                path: '/Filter',
            },
            {
                label: 'Gain',
                path: '/Gain',
            },
            {
                label: 'StereoPanner',
                path: '/StereoPanner',
            },
            {
                label: 'WaveShaper',
                path: '/WaveShaper',
            },
        ],
    },
    {
        label: 'Components',
        path: COMPONENTS_PATH,
        links: [
            {
                label: 'Envelope',
                path: '/Envelope',
            },
            {
                label: 'FilterEnvelope',
                path: '/FilterEnvelope',
            },
            {
                label: 'GainEnvelope',
                path: '/GainEnvelope',
            },
        ],
    },
    {
        label: 'Sources',
        path: SOURCES_PATH,
        links: [
            {
                label: 'BufferSource',
                path: '/BufferSource',
            },
            {
                label: 'ConstantSource',
                path: '/ConstantSource',
            },
            {
                label: 'LFO',
                path: '/LFO',
            },
            {
                label: 'NoiseGenerator',
                path: '/NoiseGenerator',
            },
            {
                label: 'Oscillator',
                path: '/Oscillator',
            },
            // {
            //     label: 'SignalGenerator',
            //     path: '/SignalGenerator',
            // },
        ],
    },
    {
        label: 'Instruments',
        path: INSTRUMENTS_PATH,
        links: [
            {
                label: 'FMSynth',
                path: '/FMSynth',
            },
            {
                label: 'MonoSynth',
                path: '/MonoSynth',
            },
            {
                label: 'Osc',
                path: '/Osc',
            },
            {
                label: 'PolySynth',
                path: '/PolySynth',
            },
            {
                label: 'SimpleFMSynth',
                path: '/SimpleFMSynth',
            },
            {
                label: 'Synth',
                path: '/Synth',
            },
        ],
    },
    {
        label: 'Effects',
        path: EFFECTS_PATH,
        links: [
            {
                label: 'Chorus',
                path: '/Chorus',
            },
            {
                label: 'Distortion',
                path: '/Distortion',
            },
            {
                label: 'EQ2',
                path: '/EQ2',
            },
            {
                label: 'FeedbackDelay',
                path: '/FeedbackDelay',
            },
            {
                label: 'Flanger',
                path: '/Flanger',
            },
            {
                label: 'Limiter',
                path: '/Limiter',
            },
            {
                label: 'PingPongDelay',
                path: '/PingPongDelay',
            },
            {
                label: 'Reverb',
                path: '/Reverb',
            },
        ],
    },
];

export default sidebarLinkConfig;
