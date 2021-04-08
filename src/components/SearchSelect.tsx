import * as React from 'react';
import { Input, InputGroup, InputRightAddon, Select } from '@chakra-ui/react';

export const SearchSelect = () => (
  <InputGroup>
    <Input placeholder="" />{' '}
    <InputRightAddon
      children={
        <Select placeholder="Filter:">
          <option>Name</option>
          <option>Tags</option>
        </Select>
      }
    />
  </InputGroup>
);
