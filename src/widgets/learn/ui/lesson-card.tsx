import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/shared/ui/card";

interface Props {
  title: string;
  quantity: number;
}

export const LessonCard = ({ quantity, title }: Props) => {
  return (
    <Link href={Page.COURSE}>
      <Card className="bg-secondary hover:bg-slate-200 cursor-pointer transition-colors">
        <CardHeader className="p-4 py-1">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-0">
          <span>{`${quantity} уроков`}</span>
        </CardContent>
      </Card>
    </Link>
  );
};
