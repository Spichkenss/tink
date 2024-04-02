import { AuthFormCard } from "@/widgets/auth/auth-form/ui";

import { SignUpForm } from "@/features/auth/signup/ui";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";

const SignUpPage = () => {
  return (
    <AuthFormCard
      heading="Регистрация"
      description="Введите номер телефона и пароль, чтобы создать новый аккаунт"
    >
      <SignUpForm />
      <Button
        variant="link"
        size="sm"
        asChild
        className="w-fit place-self-center"
      >
        <Link href={Page.SIGNIN}>
          Уже есть аккаунт? Войти
        </Link>
      </Button>
    </AuthFormCard>
  );
};

export default SignUpPage;
