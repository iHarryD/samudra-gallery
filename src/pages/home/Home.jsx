import homeStyles from "./Home.module.css";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { Header } from "../../components/header/Header";

export function Home() {
  return (
    <>
      <Header />
      <main className={homeStyles["home-main"]}>
        <FilterBar />
      </main>
    </>
  );
}
