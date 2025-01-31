import React from "react";
import { Box, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchInput = () => {
  return (
    <Box maxWidth="200px">
      <TextField.Root placeholder="Search the docs…" size="1">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
};

export default SearchInput;
