import { ImageCard } from "../imageCard/ImageCard";
import imageRowStyles from "./ImageSectionRow.module.css";

export function ImageSectionRow({ date, images, title }) {
  return (
    <section className={imageRowStyles["image-section"]}>
      <div className={imageRowStyles["section-details"]}>
        <div className={imageRowStyles["section-title"]}>{title}</div>
        <div className={imageRowStyles["section-date-span"]}>{date}</div>
      </div>
      <div className={imageRowStyles["images-container"]}>
        {images.map(({ name }) => (
          <ImageCard key={name} name={name} />
        ))}
      </div>
    </section>
  );
}
