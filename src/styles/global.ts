import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --main-font: 400 16px Cabin, sans-serif;
  --font-size: 16px;
  --base-font-size:1rem;
  --base-line-height: 1.25 * --base-font-size;
  --maxWidth: 1200px;
  --scent-650: hsl(200, 100%, 65%);
  --scent-550: hsl(200, 100%, 55%);
  --scent-450: hsl(200, 100%, 45%);
  --scent-350: hsl(200, 100%, 35%);
  --scent-250: hsl(200, 100%, 25%);
  --primary: hsl(0, 0%, 90%);
  --gray-100: hsl(0, 0%, 10%);
  --gray-200: hsl(0, 0%, 20%);
  --gray-400: hsl(0, 0%, 40%);
  --gray-600: hsl(0, 0%, 60%);
  --success_color: #00e676;
  --fail_color: tomato;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: var(--gray-200);
  color: var(--primary);
  font: var(--main-font);
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.3px;
}

h1,h2,h3,h4,h5,h6 {
  letter-spacing: 1.2px;
}

a {
text-decoration: none;
transition: all 0.3s ease 0s;
color: var(--primary);
font-weight: normal;

  &:hover {
    color: var(--scent-550);
  }
}

li {
  list-style-type: none;
}
 
`;
