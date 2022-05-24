import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    color: {
        brand: '#5374DE'
    },
    font: {
        body: 'arial'
    }
});

export const headingStyle = style({
    fontFamily: vars.font.body,
    color: vars.color.brand
});
