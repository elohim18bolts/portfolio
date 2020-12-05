import React from "react";
import { useState } from "react";

import { photos } from "./photos";
import "./photoGallery.styles.css";
import Modal from "../modal/modal.component";

export const PhotoGallery = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const handleClose = () => {
    setModalIsActive(false);
  };
  return (
    <div className="gallery">
      {modalIsActive ? (
        <Modal onButtonCloseClick={handleClose}>
          <img src={selectedPhoto} alt="modal pic" />
        </Modal>
      ) : null}
      {photos.map((photo) => (
        <div className={photo.class}>
          <img
            src={photo.src}
            alt={photo.title}
            onClick={() => {
              setModalIsActive(true);
              setSelectedPhoto(photo.src);
            }}
          />
        </div>
      ))}
    </div>
  );
};
