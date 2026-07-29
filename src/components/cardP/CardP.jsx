import React, { useState } from "react";
import "./CardP.css";
import expand from "../../assets/icon/expand.png";
import ModalProject from "./ModalProject";

export default function CardP({ title, description, images, technologies }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container-cardp" onClick={() => setOpen(true)}>
        <img src={images[0]} className="img-cardp" alt={title} />

        <div className="div-container-cardp-text">
          <h3>{title}</h3>

          <p>{description}</p>
        </div>

        <div className="div-cardp-icon">
          <img className="icon-expand" src={expand} alt="Expandir" />
        </div>
      </div>

      <ModalProject
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        description={description}
        images={images}
        technologies={technologies}
      />
    </>
  );
}
