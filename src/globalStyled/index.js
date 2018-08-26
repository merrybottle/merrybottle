import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Muli|Nixie+One|Open+Sans+Condensed:300|Roboto+Slab');

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
`;
