"use client";

import { useState } from "react";
import { Book } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/shared/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/ui/collapsible";

import { LessonCard } from "./lesson-card";

export const LearnCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full text-left">
        <Card className="bg-teal-200 hover:bg-teal-300/95 cursor-pointer flex flex-row items-center transition-colors">
          <CardHeader className="text-accent-foreground grow">
            <CardTitle>
              Научим зарабатывать на инвестициях
            </CardTitle>
            <CardDescription className="text-accent-foreground/70">
              Бесплатные курсы для новичков, чтобы начать инвестировать
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-2">
            <Book size={72} className="text-muted" />
          </CardContent>
        </Card>
      </CollapsibleTrigger>
      <CollapsibleContent className={cn("bg-secondary flex flex-col gap-4", { "p-4": isOpen })}>
        <LessonCard title="Что нужно знать об инвестициях" quantity={5} />
        <LessonCard title="Порядок в личных финансах" quantity={7} />
        <LessonCard title="Как покупать акции" quantity={5} />
      </CollapsibleContent>
    </Collapsible>
  );
};
