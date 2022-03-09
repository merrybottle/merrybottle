import { Box } from '@components/box';
import { Heading } from '@components/heading';
import { Stack } from '@components/stack';
import { Text } from '@components/text';
import { Step } from '@helpers/step';
import { Color, getColor, rgba } from '@styles/color';
import { getSpace, paddingX, paddingY } from '@styles/space';
import React from 'react';
import {
  Code,
  Codepen,
  ExternalLink,
  GitHub,
  Heart,
  Linkedin,
  MessageCircle,
} from 'react-feather';
import styled from 'styled-components';
import sydneySvg from './sydney-opera-house.svg';
import hkSvg from './hk.svg';
import jpSvg from './jp.svg';
import krSvg from './kr.svg';
import { Inline } from '@components/inline';
import { Highlight } from '@components/highlight';
import { borderRadius } from '@styles/mixins';
import spaceshipSvg from './spaceship.svg';
import oneflareSvg from './oneflare.svg';

interface SlidesProps {
  step: Step;
}

export const Slides: React.FC<SlidesProps> = ({ step }) => {
  return (
    <StyledContainer>
      {step === 'SLIDES_1' && (
        <Slide heading="About me">
          <Stack space={{ xs: 'sm', md: 'xl' }} alignX="center">
            <Stack space="xs" alignX="center">
              <Code stroke={getColor('dark')} height={32} width={32} />

              <Text variant="text" size="lg" color="dark" align="center">
                <strong>Front-end developer</strong> with over{' '}
                <Highlight backgroundColor="pink">10 years</Highlight>{' '}
                experience
              </Text>
            </Stack>

            <Stack space="xs" alignX="center">
              <Box height={56} width={56}>
                <img src={sydneySvg.src} />
              </Box>

              <Text variant="text" size="lg" color="dark" align="center">
                Based in{' '}
                <Highlight backgroundColor="blue">Sydney, Australia</Highlight>
              </Text>
            </Stack>

            <Stack space="xs" alignX="center">
              <MessageCircle
                stroke={getColor('dark')}
                fill={rgba('yellow', 0.5)}
                height={32}
                width={32}
              />

              <Text variant="text" size="lg" color="dark" align="center">
                Speaks English and Cantonese, writes English only and learning
                Korean
              </Text>
            </Stack>

            <Stack space="xs" alignX="center">
              <Heart
                stroke={getColor('dark')}
                fill={getColor('red')}
                height={32}
                width={32}
              />

              <Text variant="text" size="lg" color="dark" align="center">
                Loving remote work
              </Text>
            </Stack>

            <Stack space="xs" alignX="center">
              <Inline space="sm">
                <Box height={48} width={48}>
                  <img src={hkSvg.src} />
                </Box>
                <Box height={48} width={48}>
                  <img src={krSvg.src} />
                </Box>
                <Box height={48} width={48}>
                  <img src={jpSvg.src} />
                </Box>
              </Inline>

              <Text variant="text" size="lg" color="dark" align="center">
                Travels annually to my favourite destinations
              </Text>
            </Stack>
          </Stack>
        </Slide>
      )}

      {step === 'SLIDES_2' && (
        <Slide heading="Tech skills">
          <Box
            display="inline-flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            maxWidth={{ lg: 900 }}
          >
            <Highlight backgroundColor="pink" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                React
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                React Native
              </Text>
            </Highlight>

            <Highlight backgroundColor="yellow" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                HTML
              </Text>
            </Highlight>

            <Highlight backgroundColor="blue" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                CSS
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                JavaScript
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                CSS animations
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                SASS
              </Text>
            </Highlight>

            <Highlight backgroundColor="pink" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                Styled Components
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                SVG
              </Text>
            </Highlight>

            <Highlight backgroundColor="blue" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                TypeScript
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                NextJS
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                GatsbyJS
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                prismic.io
              </Text>
            </Highlight>

            <Highlight backgroundColor="yellow" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                Design Systems
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                Jest
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                NodeJS
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                JQuery
              </Text>
            </Highlight>
          </Box>
        </Slide>
      )}

      {step === 'SLIDES_3' && (
        <Slide heading="Portfolio">
          <Stack space="xxl" alignX="center">
            <Stack space="md" alignX="center">
              <Heading
                variant="heading"
                size={{ xs: 'sm', lg: 'md' }}
                as="h2"
                color="dark"
                align="center"
              >
                Personal work
              </Heading>

              <Box
                display="flex"
                flexDirection={{ xs: 'column', lg: 'row' }}
                alignItems="center"
                justifyContent="center"
              >
                <Box margin="xs">
                  <StyledExternalLink
                    borderColor="blue"
                    href="https://github.com/merrybottle"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Inline space="md" alignY="flex-start">
                      <Inline space="xs">
                        <GitHub
                          stroke={getColor('blue')}
                          height={32}
                          width={32}
                        />
                        <Text size="lg" variant="text" color="dark">
                          GitHub
                        </Text>
                      </Inline>

                      <ExternalLink
                        stroke={rgba('dark', 0.75)}
                        height={16}
                        width={16}
                      />
                    </Inline>
                  </StyledExternalLink>
                </Box>

                <Box margin="xs">
                  <StyledExternalLink
                    borderColor="pink"
                    href="https://codepen.io/merrybottle"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Inline space="md" alignY="flex-start">
                      <Inline space="xs">
                        <Codepen
                          stroke={getColor('pink')}
                          height={32}
                          width={32}
                        />
                        <Text size="lg" variant="text" color="dark">
                          CodePen
                        </Text>
                      </Inline>

                      <ExternalLink
                        stroke={rgba('dark', 0.75)}
                        height={16}
                        width={16}
                      />
                    </Inline>
                  </StyledExternalLink>
                </Box>
              </Box>

              <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }}>
                <Box margin="xs">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe height="200" style="width: 100%;" scrolling="no" title="Close button" src="https://codepen.io/merrybottle/embed/PdwXYO?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/PdwXYO">Close button</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>`,
                    }}
                  />
                </Box>
                <Box margin="xs">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe height="200" style="width: 100%;" scrolling="no" title="Hamburger menu + close button animation" src="https://codepen.io/merrybottle/embed/MZZEqM?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/MZZEqM">Hamburger menu + close button animation</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>`,
                    }}
                  />
                </Box>
                <Box margin="xs">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe height="200" style="width: 100%;" scrolling="no" title="Money transfer: number input form" src="https://codepen.io/merrybottle/embed/KKPaqZX?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/KKPaqZX">Money transfer: number input form</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>`,
                    }}
                  />
                </Box>
              </Box>
            </Stack>

            <Stack space="md" alignX="center">
              <Heading
                variant="heading"
                size={{ xs: 'sm', lg: 'md' }}
                as="h2"
                color="dark"
                align="center"
              >
                Most recent professonal work
              </Heading>

              <Box
                display="flex"
                flexDirection={{ xs: 'column', lg: 'row' }}
                alignItems="center"
                justifyContent="center"
              >
                <Box margin="xs">
                  <StyledExternalLink
                    borderColor="spaceship"
                    href="https://www.spaceship.com.au"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Inline space="md" alignY="flex-start">
                      <Inline space="xs">
                        <Box height={32} width={32}>
                          <img src={spaceshipSvg.src} />
                        </Box>
                        <Text size="lg" variant="text" color="dark">
                          Spaceship
                        </Text>
                      </Inline>

                      <ExternalLink
                        stroke={rgba('dark', 0.75)}
                        height={16}
                        width={16}
                      />
                    </Inline>
                  </StyledExternalLink>
                </Box>

                <Box margin="xs">
                  <StyledExternalLink
                    borderColor="oneflare"
                    href="https://www.oneflare.com.au"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Inline space="md" alignY="flex-start">
                      <Inline space="xs">
                        <Box height={32} width={32}>
                          <img src={oneflareSvg.src} />
                        </Box>
                        <Text size="lg" variant="text" color="dark">
                          Oneflare
                        </Text>
                      </Inline>

                      <ExternalLink
                        stroke={rgba('dark', 0.75)}
                        height={16}
                        width={16}
                      />
                    </Inline>
                  </StyledExternalLink>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Slide>
      )}

      {step === 'SLIDES_4' && (
        <Slide heading="Irrelevant skills">
          <Box
            display="inline-flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            maxWidth={{ lg: 400 }}
          >
            <Highlight backgroundColor="pink" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                Baking
              </Text>
            </Highlight>

            <Highlight backgroundColor="blue" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                Making jewellery
              </Text>
            </Highlight>

            <Highlight backgroundColor="yellow" margin="xs">
              <Text
                variant="text"
                size={{ xs: 'lg', xl: 'xl' }}
                color="dark"
                fontWeight="bold"
              >
                Crochet
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                Sudoku
              </Text>
            </Highlight>

            <Highlight backgroundColor="white" margin="xs">
              <Text variant="text" size={{ xs: 'lg', xl: 'xl' }} color="dark">
                Eating heaps of desserts
              </Text>
            </Highlight>
          </Box>
        </Slide>
      )}

      {step === 'SLIDES_5' && (
        <Slide heading="Where to find me">
          <StyledExternalLink
            borderColor="blue"
            href="https://www.linkedin.com/in/merrybottle"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Inline space="md" alignY="flex-start">
              <Inline space="xs">
                <Linkedin stroke={getColor('blue')} height={32} width={32} />
                <Text size="lg" variant="text" color="dark">
                  LinkedIn
                </Text>
              </Inline>

              <ExternalLink
                stroke={rgba('dark', 0.75)}
                height={16}
                width={16}
              />
            </Inline>
          </StyledExternalLink>
        </Slide>
      )}
    </StyledContainer>
  );
};

interface SlideProps {
  heading: string;
}

const Slide: React.FC<SlideProps> = ({ children, heading }) => {
  return (
    <>
      <Heading
        as="h1"
        size={{ xs: 'md', lg: 'lg' }}
        color="dark"
        variant="heading"
        align="center"
      >
        {heading.toUpperCase()}
      </Heading>

      <Box
        borderRadius="xxs"
        height={getSpace('xxs')}
        backgroundColor="dark"
        opacity={0.75}
        marginY="xs"
      />

      <Box flex={1} overflow="auto" paddingY="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={{ lg: 'center' }}
          minHeight="100%"
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

const StyledContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  paddingX: { xs: 'md', lg: 'xl' },
  paddingY: 'xxl',
})`
  position: relative;

  ::before,
  ::after {
    content: '';
    background: repeating-linear-gradient(
      -40deg,
      ${rgba('blue', 0.5)},
      ${rgba('blue', 0.5)} 32px,
      ${rgba('yellow', 0.3)} 32px,
      ${rgba('yellow', 0.3)} 64px,
      ${rgba('pink', 0.5)} 64px,
      ${rgba('pink', 0.5)} 96px
    );
    display: block;
    height: ${getSpace('xl')};
    width: 100%;
    position: absolute;
    left: 0;
  }

  ::before {
    top: 0;
  }

  ::after {
    bottom: 0;
  }
`;

const StyledExternalLink = styled.a<{ borderColor: Color }>`
  transition: 0.2s ease-in;

  &,
  &:active,
  &:visited {
    ${borderRadius('sm')}
    ${paddingX('sm')}
    ${paddingY('xs')}
    display: inline-block;
    border: 4px solid ${({ borderColor }) => rgba(borderColor, 0.6)};
    line-height: 0;
    text-decoration: none;
  }

  :hover {
    box-shadow: 0 0 0 4px ${({ borderColor }) => rgba(borderColor, 0.2)},
      inset 0 0 0 4px ${({ borderColor }) => rgba(borderColor, 0.2)};
    border: 4px solid ${({ borderColor }) => rgba(borderColor, 1)};
  }
`;
