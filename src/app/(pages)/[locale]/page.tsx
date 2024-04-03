import { Banknote, PercentCircle, Phone } from "lucide-react";
import Image from "next/image";

import { LandingCard } from "@/widgets/landing-card/ui";
import { LandingCardWithBackground } from "@/widgets/landing-card-with-background/ui";
import { LandingCardWithPhone } from "@/widgets/landing-card-with-phone/ui";
import { Footer } from "@/widgets/layout/footer/ui";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";
import { Heading } from "@/shared/ui/heading";
import { Stack } from "@/shared/ui/stack";

const HomePage = () => {
  return (
    <Stack direction="vertical" className="pt-8 px-2">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-2">
          <Heading as="h1">Сервис приема онлайн платежей</Heading>
          <Heading as="h3">Инвестиционный кошелек</Heading>
        </div>
        <Button asChild>
          <Link href={Page.SIGNIN}>Начать инвестировать</Link>
        </Button>
        <div className="">
          <Image src="/test.svg" alt="landing-picture" width={700} height={700} />
        </div>
        <Heading as="h2" className="text-center mt-8">
          Простой и удобный доступ к инвестициям
        </Heading>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <LandingCardWithBackground
            title="Личный кабинет на сайте"
            description="Легкий доступ к инвест кошельку с любых устровйтв, в том числе смартфонов"
            src="/account.webp"
          />
          <LandingCardWithBackground
            title="Терминал"
            description="Удобная торговля с компьютера:
            графики, стаканы, инструменты технического анализа"
            src="/terminal.webp"
          />
        </div>
        <Heading as="h2" className="text-center mt-8">
          Нам доверяют более 20 миллионов инвесторов
        </Heading>
        <div className="flex flex-row flex-wrap gap-4 justify-center w-full">
          <LandingCard
            title="Бесплатно"
            description="Создание кошелька - 0&#x20bd;"
            icon={<Banknote size={32} />}
          />
          <LandingCard
            title="Комиссия 0%"
            description="За покупку и продажу"
            icon={<PercentCircle size={32} />}
          />
          <LandingCard
            title="Всегда на связи"
            description="Поддержка в чате и по телефону"
            icon={<Phone size={32} />}
          />
        </div>
        <div className="bg-white w-full flex items-center flex-col shadow-xl rounded-md">
          <LandingCardWithPhone
            picture="/mob-1.jpg"
            title="Рынок ценных бумаг для инвесторов любых уровней"
            description="Акции, облигации и готовые фонды."
          />
          <LandingCardWithPhone
            picture="/mob-2.jpg"
            title="Инвест-идеи и аналитика"
            description="Свежие новости, аналитиука и инвестиционные идеи,
            отобранные со всего рынка лучшей командой аналитиков по российскому рынку."
            order="reverse"
          />
          <LandingCardWithPhone
            picture="/mob-3.jpg"
            title="Обучение инвестициям прямо в приложении"
            description="Доходчивый учебник с базовыми знанями, необходимыми для
            старта в инвестициях, а также подсказки на всех этапах инвестирования."
          />
        </div>
      </div>
      <Footer />
    </Stack>
  );
};

export default HomePage;
