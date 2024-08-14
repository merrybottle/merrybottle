export type Step =
  | 'START'
  | 'JOIN_MEETING'
  | 'INTRO_1'
  | 'INTRO_2'
  | 'INTRO_3'
  | 'INTRO_4'
  | 'INTRO_5'
  | 'INTRO_6'
  | 'INTRO_7'
  | 'INTRO_8'
  | 'SLIDES_1'
  | 'SLIDES_2'
  | 'SLIDES_3'
  | 'SLIDES_4'
  | 'SLIDES_5'
  | 'END_1'
  | 'END_2'
  | 'END_3'
  | 'END_4';

export const steps: Array<Step> = [
  'START',
  'JOIN_MEETING',
  'INTRO_1',
  'INTRO_2',
  'INTRO_3',
  'INTRO_4',
  'INTRO_5',
  'INTRO_6',
  'INTRO_7',
  'INTRO_8',
  'SLIDES_1',
  'SLIDES_2',
  'SLIDES_3',
  'SLIDES_4',
  'SLIDES_5',
  'END_1',
  'END_2',
  'END_3',
  'END_4',
];

export const stepClosedCaptions: Partial<Record<Step, string>> = {
  INTRO_1: 'Hi there! 👋',
  INTRO_2: 'Thanks for joining me here today.',
  INTRO_3: 'My name is Mary',
  INTRO_4: `and I'm a front-end engineer.`,
  INTRO_5: `I'll only take a few minutes of your time`,
  INTRO_6: 'to showcase a few things that',
  INTRO_7: `I've been up to until today.`,
  INTRO_8: `If you're ready, shall we start?`,
  END_1: `And that's it!`,
  END_2: 'If you have any questions',
  END_3: 'feel free to drop me a message.',
  END_4: 'Otherwise, see you next time! 👋',
};
