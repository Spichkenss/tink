import { Metadata } from "next";

import { AuthFormCard } from "@/widgets/auth/auth-form/ui";

import { SignInForm } from "@/features/auth/signin/ui";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";

export const metadata: Metadata = {
  title: "Вход в аккаунт",
};

const SignInPage = () => {
  return (
    <AuthFormCard
      heading="Вход в аккаунт"
      description="Войдите в аккаунт, используя номер телефона и пароль, указанные при регистрации"
    >
      <SignInForm />
      <Button variant="link" size="sm" asChild className="w-fit place-self-center">
        <Link href={Page.SIGNUP}>Зарегистрироваться</Link>
      </Button>
    </AuthFormCard>
  );
};

export default SignInPage;
