import React, { useEffect, useState } from "react";
import "./ModalProject.css";

export default function ModalProject({
  open,
  onClose,
  title,
  description,
  images,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  if (!open) return null;

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-project" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-left">
          <h2>{title}</h2>

          <p>{description}</p>

          <h4>Tecnologías</h4>

          <div className="tech-list">
            <span>React</span>
            <span>C#</span>
            <span>SQL Server</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="modal-right">
          <button className="arrow left" onClick={prevImage}>
            ❮
          </button>

          <img src={images[current]} alt="Proyecto" className="slider-image" />

          <button className="arrow right" onClick={nextImage}>
            ❯
          </button>

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
