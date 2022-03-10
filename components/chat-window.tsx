import { backgroundColor, color, getColor, rgba } from '@styles/color';
import { fontFamily } from '@styles/font';
import { mediaMatch } from '@styles/media';
import { borderRadius } from '@styles/mixins';
import { getSpace, paddingX, paddingY } from '@styles/space';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import styled, { css, keyframes } from 'styled-components';
import { Box } from './box';
import { Heading } from './heading';
import { Inline } from './inline';
import { Stack } from './stack';
import { Text } from './text';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClose = () => {
    onClose();
    setIsSending(false);
    setIsSent(false);
  };

  return (
    <form
      onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
          setIsSending(true);

          await fetch('https://submit-form.com/dwcOtJ8Q', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            mode: 'no-cors',
            referrerPolicy: 'no-referrer',
            body: new URLSearchParams(new FormData(event.currentTarget) as any),
          });

          setIsSent(true);
        } catch {
          setIsSent(false);
        } finally {
          setIsSending(false);
        }
      }}
    >
      <StyledChatWindowBox $isOpen={isOpen}>
        {isSent ? (
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack space="xxl" alignX="center">
              <Stack space="md">
                <Heading
                  as="h3"
                  variant="meeting"
                  size="lg"
                  color="dark"
                  align="center"
                >
                  🙇‍♀️
                </Heading>

                <Heading
                  variant="meeting"
                  as="h3"
                  size="md"
                  color="dark"
                  align="center"
                >
                  Sent!
                  <br />
                  Let&apos;s go back?
                </Heading>
              </Stack>

              <StyledPrimaryButton onClick={handleClose}>
                <Inline space="sm">
                  <ArrowLeft />
                  <span>Back</span>
                </Inline>
              </StyledPrimaryButton>
            </Stack>
          </Box>
        ) : (
          <>
            <Stack space="md">
              <Heading
                as="h3"
                variant="meeting"
                size="sm"
                color="dark"
                align="center"
              >
                Leave a message
              </Heading>

              <Text variant="meeting" size="md" color="dark" align="center">
                I&apos;ll get back to you as soon as I can.
              </Text>
            </Stack>

            <Box marginTop="lg">
              <Stack space="md">
                <Stack space="xs">
                  <label htmlFor="name">
                    <Text
                      size="md"
                      variant="meeting"
                      color="black"
                      fontWeight="bold"
                    >
                      Name
                    </Text>
                  </label>
                  <StyledInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Rachel Green"
                    required={true}
                    disabled={isSending}
                  />
                </Stack>

                <Stack space="xs">
                  <label htmlFor="email">
                    <Text
                      size="md"
                      variant="meeting"
                      color="black"
                      fontWeight="bold"
                    >
                      E-mail address
                    </Text>
                  </label>
                  <StyledInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required={true}
                    disabled={isSending}
                  />
                </Stack>
              </Stack>
            </Box>

            <Box display="flex" flexDirection="column" flex={1} marginTop="md">
              <label htmlFor="message">
                <Text
                  size="md"
                  variant="meeting"
                  color="black"
                  fontWeight="bold"
                >
                  Message
                </Text>
              </label>

              <Box marginTop="xs" flex={1}>
                <StyledTextarea
                  id="message"
                  name="message"
                  placeholder="Write something nice here"
                  required={true}
                  disabled={isSending}
                />
              </Box>
            </Box>

            <Box marginTop="lg">
              <Stack space="sm">
                <StyledPrimaryButton type="submit" disabled={isSending}>
                  {isSending ? 'Just one moment' : 'Send'}
                </StyledPrimaryButton>
                <StyledButton
                  onClick={handleClose}
                  type="button"
                  disabled={isSending}
                >
                  Cancel
                </StyledButton>
              </Stack>
            </Box>
          </>
        )}
      </StyledChatWindowBox>
    </form>
  );
};

const StyledChatWindowBox = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 'sm',
  backgroundColor: 'white',
  padding: { xs: 'md', md: 'lg' },
})<{ $isOpen: boolean }>`
  position: fixed;
  top: ${getSpace('sm')};
  bottom: ${getSpace('sm')};
  right: ${getSpace('sm')};
  box-shadow: 0 0 12px 4px ${rgba('black', 0.2)};
  opacity: 1;
  transition: 0.5s ease-in;

  ${mediaMatch({
    xs: css`
      left: ${getSpace('sm')};
    `,
    md: css`
      left: auto;
      width: 400px;
    `,
  })}

  ${({ $isOpen: isOpen }) =>
    !isOpen
      ? css`
          right: -100%;
          opacity: 0;
        `
      : ''}
`;

const inputStyles = css`
  ${borderRadius('xs')}
  ${fontFamily('meeting')};
  ${color('dark')}
  ${paddingY('xs')}
  ${paddingX('sm')}
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  border: 2px solid ${getColor('black')};
  outline: none;
  width: 100%;
  transition: 0.2s ease-in;

  ::placeholder {
    color: ${rgba('dark', 0.4)};
  }

  :focus,
  :not(:disabled):hover {
    border-color: ${getColor('red')};
  }

  :disabled {
    background-color: ${rgba('dark', 0.05)};
    border-color: ${rgba('dark', 0.05)};
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

const StyledTextarea = styled.textarea`
  ${inputStyles}
  height: 100%;
  resize: none;
`;

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-147px);
  }
`;

const StyledButton = styled.button`
  ${inputStyles}
  ${color('white')}
  font-weight: 600;
  background-color ${rgba('dark', 0.7)};
  border: none;
  outline: none;
  transition: 0.2s ease-in;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  height: ${getSpace('xl')};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :not(:disabled):hover {
    background-color: ${rgba('dark', 0.5)};
  }

  :disabled {
    background-color: ${rgba('dark', 0.2)};
    cursor: not-allowed;
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  ${backgroundColor('red')}

  :not(:disabled):hover {
    background-color: ${rgba('red', 0.8)};
  }

  :disabled {
    background: transparent;
    ${color('dark')}
    overflow: hidden;
    position: relative;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 200%;
      position: absolute;
      top: 0;
      left: 0;
      background: repeating-linear-gradient(
        -40deg,
        ${rgba('blue', 0.5)},
        ${rgba('blue', 0.5)} 32px,
        ${rgba('yellow', 0.3)} 32px,
        ${rgba('yellow', 0.3)} 64px,
        ${rgba('pink', 0.5)} 64px,
        ${rgba('pink', 0.5)} 96px
      );
      animation: ${loadingAnimation} 2s linear infinite;
      z-index: -1;
    }
  }
`;
