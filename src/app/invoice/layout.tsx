import Link from "next/link";
import { Header } from "../../components/component-library";
import Image from "next/image";
import ABCHealthSystemLogo from "../public/ABC-Health-System-logo.svg";

export default function InvoiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LayoutHeader />
      <main className="flex flex-col justify-center">{children}</main>
    </>
  );
}

function LayoutHeader() {
  return (
    <Header>
      <Link href="/" className="my-5">
        <Image
          src={ABCHealthSystemLogo}
          alt="ABC Health System prototype home"
          width={153}
          height={40}
          priority
        />
      </Link>
    </Header>
  );
}
