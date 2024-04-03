import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";
import { Heading } from "@/shared/ui/heading";
import { PageTemplate } from "@/shared/ui/page-template";

const CoursePage = () => {
  return (
    <PageTemplate centered className="space-y-6">
      <Heading as="h2">Ошибка загрузки курса</Heading>
      <Button asChild>
        <Link href={Page.ACCOUNT} className="font-semibold">Домой</Link>
      </Button>
    </PageTemplate>
  );
};

export default CoursePage;
