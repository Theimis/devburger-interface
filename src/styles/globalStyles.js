import { createGlobalStyle } from 'styled-components';

const globalstyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;

 }
 

 button, a {
    cursor: pointer;
 }
`;

export default globalstyles;
