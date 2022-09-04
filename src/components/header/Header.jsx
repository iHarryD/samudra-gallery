import headerStyles from "./Header.module.css";
import { Navbar } from "../navbar/Navbar";
import { PageHeader } from "../pageHeader/PageHeader";

export function Header() {
  return (
    <header className={headerStyles["header"]}>
      <Navbar />
      <PageHeader />
    </header>
  );
}
