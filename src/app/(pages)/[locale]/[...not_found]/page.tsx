import { Link } from "@/shared/config/navigation";
import { Button } from "@/shared/ui/button";
import { PageTemplate } from "@/shared/ui/page-template";

const NotFoundPage = async () => {
  return (
    <PageTemplate centered className="space-y-4">
      <h2 className="text-2xl font-semibold">Страница не была найдена</h2>
      <Button asChild>
        <Link href="/">Домой</Link>
      </Button>
    </PageTemplate>
  );
};

export default NotFoundPage;
