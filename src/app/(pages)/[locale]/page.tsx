import {
  Banknote, PercentCircle, Phone, ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import { LandingCard } from "@/widgets/landing-card/ui";
import { LandingCardWithBackground } from "@/widgets/landing-card-with-background/ui";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";

const HomePage = () => {
  return (
    <Stack direction="vertical" className="pt-8 px-2">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">
            Сервис приема онлайн платежей
          </h1>
          <h3>Инвестиционный кошелек</h3>
        </div>
        <Button asChild>
          <Link href={Page.SIGNIN}>
            Начать инвестировать
          </Link>
        </Button>
        <div className="">
          <Image src="/test.svg" alt="landing-picture" width={700} height={700} />
        </div>
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold text-center mt-8">
          Простой и удобный доступ к инвестициям
        </h2>
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
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold text-center mt-8">
          Нам доверяют более 20 миллионов инвесторов
        </h2>
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
          <div
            className="flex flex-col text-center md:flex-row items-center p-4
            xl:max-w-[75%] justify-between w-full mt-8 md:mt-0 gap-2"
          >
            <Image src="/mob-1.jpg" height={500} width={500} alt="mob-1" />
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Рынок ценных бумаг для инвесторов любых уровней
              </h4>
              <span>Акции, облигации и готовые фонды.</span>
            </div>
          </div>
          <div
            className="flex flex-col text-center md:flex-row items-center p-4
            xl:max-w-[75%] justify-between w-full mt-8 md:mt-0 gap-2"
          >
            <div className="order-last md:order-first">
              <h4 className="text-lg font-semibold mb-4">
                Инвест-идеи и аналитика
              </h4>
              <span>
                Свежие новости, аналитиука и инвестиционные идеи,
                отобранные со всего рынка лучшей командой аналитиков по российскому рынку.
              </span>
            </div>
            <Image src="/mob-2.jpg" height={500} width={500} alt="mob-2" />
          </div>
          <div
            className="flex flex-col text-center md:flex-row items-center p-4
            xl:max-w-[75%] justify-between w-full mt-8 md:mt-0 gap-2"
          >
            <Image src="/mob-3.jpg" height={500} width={500} alt="mob-3" />
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Обучение инвестициям прямо в приложении
              </h4>
              <span>
                Доходчивый учебник с базовыми знанями, необходимыми для
                старта в инвестициях, а также подсказки на всех этапах инвестирования.
              </span>
            </div>
          </div>
        </div>

      </div>
      <footer>
        <div className="flex flex-row justify-between items-center container py-4">
          <Image src="/logo.svg" alt="logo" width={200} height={100} />
          <h3 className="font-semibold text-sm md:text-lg">8-800-555-35-35</h3>
        </div>
      </footer>
    </Stack>
  );
};

export default HomePage;
