import { colors, shades } from 'frontend/styles/palette'

export const LIGHT = 'light'
export const DARK = 'dark'

const sharedColors = {
    success: colors.green,
    warning: colors.orange,
    error: colors.red,
    info: colors.blue,

    primary: colors.teal,
}

export const THEMES = {
    [LIGHT]: {
        ...sharedColors,
        background: shades.white,
        backgroundActive: shades.grey20,

        textPrimary: shades.grey70,
        textSecondary: shades.grey50,
        textDisabled: shades.grey40,
        textPlaceholder: shades.grey40,
        textDisabledPlaceholder: shades.grey30,
        textLink: colors.teal,

        filledInputBackground: shades.grey10,
        filledInputHoverBackground: shades.grey20,
        filledInputDisabledBackground: shades.grey5,

        border: shades.grey40,
        borderDisabled: shades.grey20,
        borderHover: shades.grey60,
        borderActive: colors.blue,

        icon: shades.grey50,
        iconHover: shades.grey70,
        iconActive: shades.grey70,

        buttonPrimaryBackground: colors.teal,
        buttonPrimaryHoverBackground: colors.tealDark,

        displayBorder: shades.grey30,
        displayBackground: shades.white,
        displayBackgroundActive: shades.grey20,
    },
    [DARK]: {
        ...sharedColors,
        background: shades.grey90,
        // background: shades.grey80,
        backgroundActive: shades.grey60,

        textPrimary: shades.grey10,
        textSecondary: shades.grey40,
        textDisabled: shades.grey50,
        textPlaceholder: shades.grey50,
        textDisabledPlaceholder: shades.grey60,
        textLink: colors.teal,

        filledInputBackground: shades.grey70,
        filledInputHoverBackground: shades.grey60,
        filledInputDisabledBackground: shades.grey80,

        border: shades.grey50,
        borderDisabled: shades.grey60,
        borderHover: shades.grey30,
        borderActive: colors.blue,

        icon: shades.grey40,
        iconHover: shades.grey20,
        iconActive: shades.grey20,

        buttonPrimaryBackground: colors.teal,
        buttonPrimaryHoverBackground: colors.tealLite,

        displayBorder: shades.grey50,
        displayBackground: shades.grey70,
        displayBackgroundActive: shades.grey60,
    },
}
