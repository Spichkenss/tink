import Image from "next/image";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";

export const HeaderLogo = () => {
  return (
    <Link href={Page.ACCOUNT}>
      <Image
        height={40}
        width={40}
        src="/logo.png"
        alt="logo"
      />
    </Link>
  );
};
