import Image from "next/image";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/shared/ui/card";

interface Props {
  title: string;
  description: string;
  src: string;
}

export const LandingCardWithBackground = ({ description, src, title }: Props) => {
  return (
    <Card className="p-0 m-0 text-center max-w-[400px] flex flex-col">
      <CardHeader className="grow space-y-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0 relative flex justify-center">
        <Image
          src={src}
          alt="icon"
          width={500}
          height={500}
          className="object-cover"
        />
        <Button asChild variant="secondary" className="absolute bottom-6 w-fit">
          <Link href={Page.SIGNIN}>
            Войти
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
