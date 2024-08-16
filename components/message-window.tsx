import { backgroundColor, color, getColor, rgba } from '@styles/color';
import { fontFamily } from '@styles/font';
import { mediaMatch } from '@styles/media';
import { borderRadius } from '@styles/mixins';
import { getSpace, paddingX, paddingY } from '@styles/space';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { ArrowLeft, Mail, Send, X } from 'react-feather';
import styled, { css, keyframes } from 'styled-components';
import { Box } from './box';
import { Heading } from './heading';
import { Inline } from './inline';
import { Stack } from './stack';
import { Text } from './text';
import { darken, lighten, mix } from 'polished';
import { ControlButton } from './control-button';

export interface MessageWindowRef {
  open: () => void;
  close: () => void;
}

export const MessageWindow = React.forwardRef<MessageWindowRef>(
  function MessageWindow(_, forwardedRef) {
    const ref = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleClose = () => {
      ref?.current?.close();
      setIsSending(false);
      setIsSent(false);
    };

    useImperativeHandle(forwardedRef, () => ({
      open: () => {
        ref?.current?.showModal();
      },
      close: handleClose,
    }));

    return (
      <StyledDialog ref={ref} onCancel={handleClose}>
        <form
          ref={formRef}
          onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            try {
              setIsSending(true);

              await fetch('https://submit-form.com/bUhPVZqrG', {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                mode: 'no-cors',
                referrerPolicy: 'no-referrer',
                body: new URLSearchParams(
                  new FormData(event.currentTarget) as any,
                ),
              });

              setIsSent(true);

              setTimeout(() => {
                handleClose();
                formRef.current?.reset();
              }, 3000);
            } catch {
              setIsSent(false);
            } finally {
              setIsSending(false);
            }
          }}
          style={{ height: '100%' }}
        >
          <Box $height="100%" $padding={{ xs: 'md', md: 'lg' }}>
            <StyledCloseButtonBox>
              <ControlButton
                onClick={handleClose}
                disabled={isSending}
                label="Close"
                type="button"
              >
                <X />
              </ControlButton>
            </StyledCloseButtonBox>

            <Box
              $display="flex"
              $flexDirection="column"
              $justifyContent="center"
              $height="100%"
            >
              <Box $display="flex" $justifyContent="center">
                <Mail color={getColor('dark')} size={56} strokeWidth={1.5} />
              </Box>

              <Heading
                as="h3"
                $variant="meeting"
                $size="sm"
                $color="dark"
                $align="center"
              >
                Leave a message
              </Heading>

              <Box $marginTop="lg">
                <Stack $space="md">
                  <Stack $space="xxs">
                    <label htmlFor="name">
                      <Text
                        $size="md"
                        $variant="meeting"
                        $color="black"
                        $fontWeight="bold"
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

                  <Stack $space="xxs">
                    <label htmlFor="email">
                      <Text
                        $size="md"
                        $variant="meeting"
                        $color="black"
                        $fontWeight="bold"
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

              <Box
                $display="flex"
                $flexDirection="column"
                $flex={1}
                $marginTop="md"
              >
                <label htmlFor="message">
                  <Text
                    $size="md"
                    $variant="meeting"
                    $color="black"
                    $fontWeight="bold"
                  >
                    Message
                  </Text>
                </label>

                <Box $marginTop="xxs" $flex={1}>
                  <StyledTextarea
                    id="message"
                    name="message"
                    placeholder="Write something nice here"
                    required={true}
                    disabled={isSending}
                  />
                </Box>
              </Box>

              <Box
                $display="flex"
                $justifyContent="center"
                $marginTop="lg"
                $marginBottom="md"
              >
                <StyledButton
                  type="submit"
                  disabled={isSending}
                  aria-label="Send"
                >
                  <StyledButtonInner>
                    {isSending ? (
                      <Box $height={36}>
                        <StyledSendIconContainer>
                          <Send />
                        </StyledSendIconContainer>
                      </Box>
                    ) : (
                      <Text
                        $variant="meeting"
                        $size="xl"
                        $color="dark"
                        as="span"
                      >
                        {isSent ? 'Sent!' : 'Send'}
                      </Text>
                    )}
                  </StyledButtonInner>
                </StyledButton>
              </Box>
            </Box>

            {isSent && (
              <StyledSentContainer>
                <Box $display="flex" $justifyContent="center">
                  <Send color={getColor('dark')} size={56} strokeWidth={1.5} />
                </Box>

                <Heading
                  $variant="meeting"
                  as="h3"
                  $size="md"
                  $color="dark"
                  $align="center"
                >
                  Sent!
                </Heading>
              </StyledSentContainer>
            )}
          </Box>
        </form>
      </StyledDialog>
    );
  },
);

const showDialogAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(110%);
  }
  to {
    transform: translateX(-50%) translateY(0%);
  }
`;

const hideDialogAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(0%);
  }
  to {
    transform: translateX(-50%) translateY(110%);
  }
`;

const showBackdropAnimation = keyframes`
  from {
    background-color: ${rgba('white', 0)};
    backdrop-filter: blur(0);
  }
  to {
    background-color: ${rgba('white', 0.3)};
    backdrop-filter: blur(3px);
  }
`;

const hideBackdropAnimation = keyframes`
  from {
    background-color: ${rgba('white', 0.3)};
    backdrop-filter: blur(3px);
  }
  to {
    background-color: ${rgba('white', 0)};
    backdrop-filter: blur(0);
  }
`;

const StyledDialog = styled.dialog`
  animation: ${hideDialogAnimation} 0.3s ease-in forwards;
  ${borderRadius('lg')}
  ${backgroundColor('white')}
  box-sizing: border-box;
  border: 16px solid ${lighten(0.2, getColor('blue'))};
  border-bottom: none;
  outline: 3px solid ${getColor('dark')};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 0 12px 4px ${rgba('black', 0.2)};
  padding: 0;
  margin: 0;
  max-height: none;
  height: auto;
  width: calc(100% - ${getSpace('sm')} * 2);
  max-width: 600px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(110%);
  transition: 0.3s allow-discrete;

  ${mediaMatch({
    xs: css`
      top: ${getSpace('sm')};
    `,
    md: css`
      top: ${getSpace('xl')};
    `,
  })}

  &[open] {
    animation: ${showDialogAnimation} 0.3s ease-in forwards;
  }

  &::backdrop {
    animation: ${hideBackdropAnimation} 0.3s ease-in forwards;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(0);
    background-color: ${rgba('white', 0)};
    transition: 0.3s allow-discrete;
  }

  &[open]::backdrop {
    animation: ${showBackdropAnimation} 0.3s ease-in forwards;
  }
`;

const sentAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const StyledSentContainer = styled.div`
  animation: ${sentAnimation} 0.2s ease-in forwards;
  background-color: ${rgba('white', 0.3)};
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scale(0);

  &::before {
    content: '';
    height: 200px;
    width: 200px;
    border-radius: 50%;
    ${backgroundColor('white')}
    border: 3px solid ${getColor('dark')};
    box-shadow: 0 0 12px 4px ${rgba('black', 0.2)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const sendIconAnimation = keyframes`
  0% {
    left: 4px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  90% {
    left: calc(100% - 28px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const StyledSendIconContainer = styled.span`
  animation: ${sendIconAnimation} 3s ease-in infinite;
  display: flex;
  align-items: center;
  position: absolute;
  left: 4px;
  height: 36px;
  transform: rotate(45deg);
`;

const inputStyles = css`
  ${borderRadius('sm')}
  ${fontFamily('meeting')};
  ${color('dark')}
  ${paddingY('sm')}
  ${paddingX('sm')}
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  border: 3px solid ${getColor('dark')};
  outline: none;
  width: 100%;
  transition: 0.2s ease-in;

  &::placeholder {
    color: ${rgba('dark', 0.4)};
  }

  &:focus,
  &:not(:disabled):hover {
    background-color: ${rgba('blue', 0.1)};
  }

  &:disabled {
    background-color: ${rgba('dark', 0.05)} !important;
    border-color: ${rgba('dark', 0.1)};
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

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 200px;
  min-width: max-content;
  position: relative;
  transition: 0.45s 0.3s ease-in;

  &::after {
    content: '';
    ${borderRadius('sm')}
    background-color: ${mix(0.6, getColor('background'), getColor('pink'))};
    border: 3px solid ${getColor('dark')};
    position: absolute;
    top: 8px;
    bottom: -8px;
    left: 16px;
    right: 16px;
    z-index: -1;
    transition: 0.1s ease-in;
  }
`;

const StyledButtonInner = styled.span`
  ${borderRadius('sm')}
  ${backgroundColor('pink')}
  ${paddingX('md')}
  ${paddingY('xs')}
  cursor: pointer;
  display: inline-block;
  border: 3px solid ${getColor('dark')};
  transition: 0.2s ease-in;
  box-sizing: border-box;
  width: 100%;

  ${StyledButton}:hover & {
    background-color: ${darken(0.05, getColor('pink'))};
    transform: translateY(-4px);
  }
`;

const StyledCloseButtonBox = styled(Box).attrs({
  $position: 'absolute',
})`
  top: ${getSpace('sm')};
  right: ${getSpace('sm')};
`;
