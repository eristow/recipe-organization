import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Heading,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

import { SearchSelect } from '../components/SearchSelect';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" maxW="48em" margin="auto">
      <Grid minH="5vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
      <Grid
        templateRows="repeat(2, 50px)"
        templateColumns="repeat(5, 1fr)"
        minH="95vh"
        p={3}
        gap={8}
      >
        <GridItem colSpan={6}>
          <Heading>Recipe Organizer</Heading>
        </GridItem>
        <GridItem colSpan={6}>
          <SearchSelect />
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);
