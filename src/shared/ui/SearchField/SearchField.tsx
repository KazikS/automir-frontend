import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

type SearchType = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchField = ({ value, setValue }: SearchType) => {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input
        placeholder="Поиск"
        border="1px solid"
        borderColor="border.default"
        rounded="xl"
        maxW="96"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
  );
};
