import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between items-center container py-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={100}
        />
        <h3 className="font-semibold text-sm md:text-lg">8-800-555-35-35</h3>
      </div>
    </footer>
  );
};
