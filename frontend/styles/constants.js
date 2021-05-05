// Size constants in rems
const size0 = '0rem';      // 0px
const size1 = '0.0625rem'; // 1px
const size2 = '0.125rem';  // 2px
const size4 = '0.25rem';   // 4px
const size6 = '0.375rem';  // 6px
const size8 = '0.5rem';    // 8px
const size10 = '0.625rem'; // 10px
const size12 = '0.75rem';  // 12px
const size14 = '0.875rem'; // 14px
const size16 = '1rem';     // 16px
const size20 = '1.25rem';  // 20px
const size24 = '1.5rem';   // 24px
const size32 = '2rem';     // 32px
const size40 = '2.5rem';   // 40px
const size48 = '3rem';     // 48px
const size64 = '4rem';     // 64px
const size72 = '4.5rem';   // 72px
const size80 = '5rem';     // 80px

// For misc use
export const SPACING = {
    xxl: size64,
    xl: size48,
    l: size32,
    ml: size24,
    m: size16,
    sm: size12,
    s: size8,
    xs: size4,
    xxs: size2,
};

export const containerPadL = size48;
export const containerPadM = size32;
export const containerPadS = size16;
export const containerPadXS = size8;

export const borderWidth = size1;
export const borderRadiusL = size8;
export const borderRadiusM = size6;
export const borderRadiusS = size4;
export const borderRadiusXS = size2;

export const defaultTransition = '0.25s cubic-bezier(0.5, 0, 0.2, 1)';

export const defaultCheckboxSize = size20;

export const defaultIconSize = size24;
export const iconSizeXL = size48;
export const iconSizeL = size32;
export const iconSizeM = size24;
export const iconSizeS = size16;
export const defaultIconStrokeWidth = 2;

export const Z_INDEX = {
    behind: -1,
    normal: 1,
    display: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    toast: 50,
};

// Typography constants
export const FONT_SIZE = {
    xxs: size10,
    xs: size12,
    s: size14,
    m: size16,
    ml: size20,
    l: size24,
    xl: size32,
    xxl: size48,
    xxxl: size72,
};

export const FONT_WEIGHT = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
};

export const TYPOGRAPHY = {
    defaultFontFamily: '"Rubik", sans-serif',
    defaultLineHeight: '1.4',
    defaultFontSize: FONT_SIZE.m,
    defaultFontWeight: FONT_WEIGHT.normal,
    defaultLetterSpacing: '0px',

    h1: {
        fontSize: FONT_SIZE.xxxl,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '-1px',
    },
    h2: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '-0.5px',
    },
    h3: {
        fontSize: FONT_SIZE.xl,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '-0.5px',
    },
    h4: {
        fontSize: FONT_SIZE.l,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '0px',
    },
    h5: {
        fontSize: FONT_SIZE.m,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '0px',
    },
    h6: {
        fontSize: FONT_SIZE.s,
        fontWeight: FONT_WEIGHT.bold,
        letterSpacing: '0px',
    },
    primary: {
        fontSize: FONT_SIZE.m,
        fontWeight: FONT_WEIGHT.normal,
        letterSpacing: '0px',
    },
    secondary: {
        fontSize: FONT_SIZE.s,
        fontWeight: FONT_WEIGHT.normal,
        letterSpacing: '0px',
    },
};
