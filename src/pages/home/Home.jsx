import homeStyles from "./Home.module.css";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { Header } from "../../components/header/Header";
import { ImageSectionRow } from "../../components/imageSectionRow/ImageSectionRow";
import { useEffect, useState } from "react";
import { getFakeDate } from "../../helpers/getFakeDate";

const libraryData = [
  { name: "bridge_dj939", category: "architecture", date: getFakeDate(true) },
  { name: "new_house_y84", category: "architecture", date: getFakeDate(true) },
  { name: "kitchen_ud83", category: "architecture", date: getFakeDate(true) },
  { name: "seg_8f93u", category: "unknown", date: getFakeDate(true) },
  { name: "abstract_93ru", category: "unknown", date: getFakeDate(true) },
  {
    name: "barakpore_valley_298fuj3",
    category: "unknown",
    date: getFakeDate(true),
  },
  { name: "new_house_983fw", category: "architecture", date: getFakeDate() },
  { name: "seg_093uf", category: "architecture", date: getFakeDate() },
  { name: "new_house_di39i", category: "architecture", date: getFakeDate() },
];

export function Home() {
  const [activeFilter, setActiveFilter] = useState("all photos");
  const [todaysImagesToView, setTodaysImagesToView] = useState([]);
  const [oldImagesToView, setOldImagesToView] = useState([]);

  useEffect(() => {
    const filteredImages =
      activeFilter !== "all photos"
        ? libraryData.filter(({ category }) => category === activeFilter)
        : libraryData;
    const todayDate = new Date().toDateString();
    const todayFilteredImages = [];
    const oldFilteredImages = [];
    filteredImages.forEach((image) => {
      if (image.date === todayDate) {
        todayFilteredImages.push(image);
      } else {
        oldFilteredImages.push(image);
      }
    });
    setTodaysImagesToView(todayFilteredImages);
    setOldImagesToView(oldFilteredImages);
  }, [activeFilter]);

  return (
    <>
      <Header />
      <main className={homeStyles["home-main"]}>
        <FilterBar
          filterState={activeFilter}
          filterStateSetter={setActiveFilter}
        />
        <div className={homeStyles["image-sections-container"]}>
          {todaysImagesToView.length > 0 && (
            <ImageSectionRow
              date={todaysImagesToView[0].date}
              images={todaysImagesToView}
              title="Today"
            />
          )}
          {oldImagesToView.length > 0 && (
            <ImageSectionRow
              date={`${new Date(
                new Date() - 1000 * 60 * 60 * 24 * 7
              ).toDateString()} to ${new Date(
                new Date() - 1000 * 60 * 60 * 24
              ).toDateString()}
              `}
              images={oldImagesToView}
              title="This week"
            />
          )}
        </div>
      </main>
    </>
  );
}
