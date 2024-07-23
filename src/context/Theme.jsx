// import React, { useState, useLayoutEffect } from 'react';

// const ThemeContext = React.createContext({
//     dark: false,
//     toggle: () => {},
// });

// export default ThemeContext;

// export function ThemeProvider({ children }) {
//     // keeps state of the current theme
//     const [dark, setDark] = useState(false);

//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
//         .matches;
//     const prefersLight = window.matchMedia('(prefers-color-scheme: light)')
//         .matches;
//     const prefersNotSet = window.matchMedia(
//         '(prefers-color-scheme: no-preference)'
//     ).matches;

//     useLayoutEffect(() => {
//         if (prefersDark) {
//             setDark(true);
//         }

//         if (prefersLight) {
//             setDark(false);
//         }

//          if (prefersNotSet) {
//             setDark(true);
//         }

//         applyTheme();

//         // if state changes, repaints the app
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [dark]);

// //     // rewrites set of css variablels/colors
//     const applyTheme = () => {
//         let theme;
//         if (dark) {
//             theme = darkTheme;
//         }
//         if (!dark) {
//             theme = lightTheme;
//         }

//         const root = document.getElementsByTagName('html')[0];
//         root.style.cssText = theme.join(';');
//     };

//     const toggle = () => {
//         console.log('Toggle Method Called');
//          // A smooth transition on theme switch
//         const body = document.getElementsByTagName('body')[0];
//         body.style.cssText = 'transition: background .5s ease';

//         setDark(!dark);
//     };

//     return (
//        <ThemeContext.Provider
//             value={{
//                 dark,
//                 toggle,
//             }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }