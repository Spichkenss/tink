import { Button } from "@/shared/ui/button";

interface Props {
  link: string;
}

export const RedirectToChatButton = ({ link }: Props) => {
  return (
    <Button className="p-0 m-0" variant="link">
      <a href={link}>
        Возникли вопросы?
      </a>
    </Button>
  );
};
