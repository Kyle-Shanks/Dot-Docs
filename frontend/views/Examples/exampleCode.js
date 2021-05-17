export const basicExample = `// Import dot to your project
import * as Dot from 'dot-audio'

// Create an audio context of your choosing
const AC = new AudioContext()

// Create synth
const synth = new Dot.Synth(AC)

// Connect synth to destination
synth.connect(AC.destination)

// Play a note
synth.noteOn('C4')
`;

export const pluckExample = `// Import dot to your project
import * as Dot from 'dot-audio'

// Create an audio context of your choosing
const AC = new AudioContext()

// Props to create a square wave pluck sound
const pluckProps = {
    waveform: 'square', // Set oscillator waveform to square wave
    filterFrequency: 0, // Filter frequency value
    filterAmount: 1000, // Filter envelope modulation amount
    filterDecay: 0.4,   // Filter envelope decay time
    filterSustain: 0,   // Filter envelope sustain value
}

// Create polyphonic synth with pluck props
const synth = new Dot.PolySynth(AC, pluckProps)

// Connect synth to destination and play Cm7 chord
synth.connect(AC.destination)
synth.noteOn(['C4', 'D#4', 'G4', 'A#4'])
`;

export const chaingExample = `import * as Dot from 'dot-audio'

const AC = new AudioContext()

// Create polyphonic synth
const synth = new Dot.PolySynth(AC, { gainDecay: 0.4, gainSustain: 0 })

// Create chorus and reverb effects for a nice lush sound
const chorus = new Dot.Chorus(AC, { amount: 0.4 })
const reverb = new Dot.Reverb(AC, { amount: 0.25 })

// Create a limiter to tame the output
const limiter = new Dot.Limiter(AC)

// Connect all nodes together and play Cm7 chord
Dot.chain(synth, chorus, reverb, limiter, AC.destination)
synth.noteOn(['C4', 'D#4', 'G4', 'A#4'])
`;

export const keyboardExample = `import * as Dot from 'dot-audio'

const AC = new AudioContext()

// Nodes
const synth = new Dot.PolySynth(AC, { gainDecay: 0.4, gainSustain: 0 })
const chorus = new Dot.Chorus(AC, { amount: 0.4 })
const reverb = new Dot.Reverb(AC, { amount: 0.25 })
const limiter = new Dot.Limiter(AC)

// Connect
Dot.chain(synth, chorus, reverb, limiter, AC.destination)

// Keyboard setup
const keyboard = new Dot.Keyboard({
    onPress: (noteInfo) => {
        // Start context when the user tries to play a note
        if (AC.state === 'suspended') AC.resume()

        synth.noteOn(noteInfo.fullNote)
    },
    onRelease: (noteInfo) => {
        synth.noteOff(noteInfo.fullNote)
    },
})

// Start keyboard listeners
keyboard.on()
`;
