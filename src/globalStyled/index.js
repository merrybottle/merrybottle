import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=BenchNine:300|Open+Sans+Condensed:300');

  body,
  html {
    min-height: 100%;
  }

  body {
    margin: 0;
  }

  strong {
    font-weight: bold;
  }

  a,
  a:hover {
    color: #154360;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
