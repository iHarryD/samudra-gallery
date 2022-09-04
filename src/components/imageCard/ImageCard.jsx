import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import imageCardStyles from "./ImageCard.module.css";

export function ImageCard({ name }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={imageCardStyles["image-card"]}>
      <div className={imageCardStyles["image-container"]}>
        <button
          className={imageCardStyles["favorite-btn"]}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            color={isFavorite ? "#EC6A5E" : "#fff"}
          />
        </button>
        <img
          className={imageCardStyles["image"]}
          src={process.env.PUBLIC_URL + "/assets/" + name + ".jpg"}
          alt={name}
        />
      </div>
      <p className={imageCardStyles["image-title"]}>{name}</p>
    </div>
  );
}
