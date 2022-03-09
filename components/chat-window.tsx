import { backgroundColor, color, getColor, rgba } from '@styles/color';
import { fontFamily } from '@styles/font';
import { mediaMatch } from '@styles/media';
import { borderRadius } from '@styles/mixins';
import { getSpace, paddingX, paddingY } from '@styles/space';
import React from 'react';
import styled, { css } from 'styled-components';
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
  return (
    <StyledChatWindowBox $isOpen={isOpen}>
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
        <Stack space="xs">
          <label htmlFor="msgEmailAddress">
            <Text size="md" variant="meeting" color="black" fontWeight="bold">
              E-mail address
            </Text>
          </label>
          <StyledInput
            type="email"
            id="msgEmailAddress"
            placeholder="your@email.com"
          />
        </Stack>
      </Box>

      <Box display="flex" flexDirection="column" flex={1} marginTop="md">
        <label htmlFor="msgContent">
          <Text size="md" variant="meeting" color="black" fontWeight="bold">
            Message
          </Text>
        </label>

        <Box marginTop="xs" flex={1}>
          <StyledTextarea
            id="msgContent"
            placeholder="Write something nice here"
          />
        </Box>
      </Box>

      <Box marginTop="lg" display="flex" justifyContent="space-between">
        <StyledButton onClick={onClose}>Cancel</StyledButton>
        <StyledSendButton>Send</StyledSendButton>
      </Box>
    </StyledChatWindowBox>
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
`;

const StyledInput = styled.input`
  ${inputStyles}

  ::placeholder {
    color: ${rgba('blue', 0.8)};
  }

  :focus,
  :hover {
    border-color: ${getColor('blue')};
  }
`;

const StyledTextarea = styled.textarea`
  ${inputStyles}
  height: 100%;

  ::placeholder {
    color: ${rgba('pink', 0.8)};
  }

  :focus,
  :hover {
    border-color: ${getColor('pink')};
  }
`;

const StyledButton = styled.button`
  ${inputStyles}
  font-weight: 600;
  background: transparent;
  border: 2px solid ${getColor('black')};
  outline: none;
  transition: 0.2s ease-in;
  text-transform: uppercase;
  width: 130px;
  cursor: pointer;

  :hover {
    border-color: ${rgba('dark', 0.7)};
    color: ${rgba('dark', 0.7)};
  }
`;

const StyledSendButton = styled(StyledButton)`
  ${backgroundColor('red')}
  ${color('white')}
  border-color: ${getColor('red')};

  :hover {
    border-color: ${rgba('red', 0.8)};
    background-color: ${rgba('red', 0.8)};
    ${color('white')}
  }
`;
