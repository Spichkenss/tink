import { Card, CardContent } from "@/shared/ui/card";

import { CurrencyItem } from "./currency-item";

export const CurrencyCard = () => {
  return (
    <Card>
      <CardContent className="p-2 space-y-2">
        <CurrencyItem
          icon="/usa.png"
          label="Доллар США"
          current="92,39"
          diff="1.13%"
          diffColor="green"
        />
        <CurrencyItem
          icon="/china.png"
          label="Китайский юань"
          current="12,71"
          diff="0.53%"
          diffColor="green"
        />
        <CurrencyItem
          icon="/euro.png"
          label="Евро"
          current="92,39"
          diff="0.32%"
          diffColor="green"
        />
      </CardContent>
    </Card>
  );
};
