import { prisma } from "@/shared/config/prisma";
import { Button } from "@/shared/ui/button";

export const RedirectToChatButton = async () => {
  const chat = await prisma.contacts.findFirst({ where: { name: "WHATSUP" } });

  return (
    <Button className="p-0 m-0" variant="link">
      <a href={chat?.link}>
        Возникли вопросы?
      </a>
    </Button>
  );
};
