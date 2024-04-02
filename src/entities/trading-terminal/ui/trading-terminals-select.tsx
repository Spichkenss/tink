import { TradingTerminal } from "@prisma/client";
import { SelectProps } from "@radix-ui/react-select";

import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/shared/ui/select";

interface Props extends SelectProps {
  terminals: TradingTerminal[];
}

export const TradingTerminalSelect = ({ terminals, onValueChange, ...field }: Props) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full" {...field}>
        <SelectValue placeholder="Выбрать..." className="bg-secondary w-full" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(terminals).map(([key, value]) => (
          <SelectItem value={value.id} key={value.id}>
            {value.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
