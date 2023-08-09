import styled from 'styled-components';
import Box from './Box';
import { flexbox, compose, flex } from 'styled-system';
import { FlexProps } from './types';

const Flex = styled(Box)<FlexProps>`
  ${compose(flex, flexbox)}
`;

export default Flex;
