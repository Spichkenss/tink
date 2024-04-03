import { Gift } from "lucide-react";

import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/shared/ui/card";

export const GiftForFriend = () => {
  return (
    <Card className="w-full flex flex-row items-center bg-slate-300">
      <CardHeader className="grow">
        <CardTitle>Подарок за друга</CardTitle>
        <CardDescription>
          Расскажите о нас и получите бонус - акцию крупной компании
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        <Gift size={72} className="text-muted-foreground" />
      </CardContent>
    </Card>
  );
};
