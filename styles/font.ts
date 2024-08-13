export type Font = 'meeting' | 'heading' | 'text';

export const fonts: Record<Font, string> = {
  meeting: `'Fredoka', sans-serif`,
  heading: `'Merriweather', serif`,
  text: `'Fredoka', sans-serif`,
};

export const getFont = (type: Font): string => fonts[type];

export const fontFamily = (type: Font): string =>
  `font-family: ${getFont(type)};`;
