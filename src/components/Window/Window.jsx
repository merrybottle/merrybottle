// @flow
import React from 'react';
import {
  WindowStyled
} from './styled/Window';

const Window = () => (
  <WindowStyled>
    <svg viewBox="0 0 500 500"  height="100%" width="100%">
      <rect x="20" y="0" height="500" width="460" fill="#873600" />
      <rect x="0" y="0" height="20" width="500" rx="10" ry="10" fill="#641e16" />
      <rect x="0" y="470" height="20" width="500" rx="10" ry="10" fill="#641e16" />
      <rect x="10" y="480" height="20" width="480" rx="10" ry="10" fill="#641e16" />

      <rect x="60" y="40" height="180" width="170" rx="4" ry="4" fill="#212F3C" />
      <rect x="270" y="40" height="180" width="170" rx="4" ry="4" fill="#212F3C" />
      <rect x="60" y="260" height="180" width="170" rx="4" ry="4" fill="#212F3C" />
      <rect x="270" y="260" height="180" width="170" rx="4" ry="4" fill="#212F3C" />

      <circle cx="90" cy="80" r="8" fill="#f1c40f" />
      <circle cx="140" cy="150" r="8" fill="#f1c40f" />
      <circle cx="120" cy="290" r="4" fill="#f1c40f" />
      <circle cx="350" cy="120" r="6" fill="#f1c40f" />
    </svg>
  </WindowStyled>
);

export default Window;