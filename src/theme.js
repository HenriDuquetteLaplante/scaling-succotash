import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === 'light' ? {
        'grey': {
            DEFAULT: '#666666',
            50: '#C2C2C2',
            100: '#B8B8B8',
            200: '#A3A3A3',
            300: '#8F8F8F',
            400: '#7A7A7A',
            500: '#666666',
            600: '#4A4A4A',
            700: '#2E2E2E',
            800: '#121212',
            900: '#000000',
            950: '#000000',
        },

        'primary': {
            DEFAULT: '#141B2B',
            50: '#4E6AA8',
            100: '#48619A',
            200: '#3B4F7F',
            300: '#2E3E63',
            400: '#212C47',
            500: '#141B2B',
            600: '#020305',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000',
        },
        'greenAccent': {
            DEFAULT: '#4CCEAC',
            50: '#DCF5EF',
            100: '#CCF1E7',
            200: '#ACE8D9',
            300: '#8CE0CA',
            400: '#6CD7BB',
            500: '#4CCEAC',
            600: '#31B190',
            700: '#24856C',
            800: '#185948',
            900: '#0C2D25',
            950: '#061713',
        },
        'redAccent': {
            DEFAULT: '#DB4F4A',
            50: '#F9E4E3',
            100: '#F6D3D2',
            200: '#EFB2B0',
            300: '#E9918E',
            400: '#E2706C',
            500: '#DB4F4A',
            600: '#C62D27',
            700: '#97221E',
            800: '#681815',
            900: '#390D0B',
            950: '#220807',
        },
        'blueAccent': {
            DEFAULT: '#6870FA',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#DEE0FE',
            300: '#B7BBFD',
            400: '#8F95FB',
            500: '#6870FA',
            600: '#323DF8',
            700: '#0814EA',
            800: '#060FB4',
            900: '#040B7D',
            950: '#030862',
        },
    }
    : {
        'grey': {
            50: '#000000',
            100: '#000000',
            200: '#121212',
            300: '#2E2E2E',
            400: '#4A4A4A',
            500: '#666666',
            600: '#7A7A7A',
            700: '#8F8F8F',
            800: '#A3A3A3',
            900: '#B8B8B8',
            950: '#C2C2C2',
            DEFAULT: '#666666',
        },

        'primary': {
            50: '#000000',
            100: '#07090F',
            200: '#192135',
            300: '#2A3A5B',
            400: '#3C5282',
            500: '#4E6AA8',
            600: '#6780B8',
            700: '#8297C5',
            800: '#9EAED2',
            900: '#BAC6DF',
            950: '#C8D1E6',
            DEFAULT: '#4E6AA8',
        },
        'greenAccent': {
            50: '#061713',
            100: '#0C2D25',
            200: '#185948',
            300: '#24856C',
            400: '#31B190',
            500: '#4CCEAC',
            600: '#6CD7BB',
            700: '#8CE0CA',
            800: '#ACE8D9',
            900: '#CCF1E7',
            950: '#DCF5EF',
            DEFAULT: '#4CCEAC',
        },
        'redAccent': {
            50: '#220807',
            100: '#390D0B',
            200: '#681815',
            300: '#97221E',
            400: '#C62D27',
            500: '#DB4F4A',
            600: '#E2706C',
            700: '#E9918E',
            800: '#EFB2B0',
            900: '#F6D3D2',
            950: '#F9E4E3',
            DEFAULT: '#DB4F4A',
        },
        'blueAccent': {
            50: '#030862',
            100: '#040B7D',
            200: '#060FB4',
            300: '#0814EA',
            400: '#323DF8',
            500: '#6870FA',
            600: '#8F95FB',
            700: '#B7BBFD',
            800: '#DEE0FE',
            900: '#FFFFFF',
            950: '#FFFFFF',
            DEFAULT: '#6870FA',
        },
    })
});

// mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[400],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[300]
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: '#fcfcfc',
                    },
                }
            ),
        },
        typography: {
            fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
            fontsize: 12,
            h1: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 40,
            },
            h2: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 32,
            },
            h3: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 24,
            },
            h4: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 20,
            },
            h5: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 16,
            },
            h6: {
                fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
                fontsize: 14,
            },
        }
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );
    
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}

