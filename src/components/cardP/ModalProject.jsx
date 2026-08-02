import React, { useEffect, useState } from "react";
import "./ModalProject.css";

export default function ModalProject({
  open,
  onClose,
  title,
  description,
  images,
  technologies,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0"));

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    }

    return () => {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0"));

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
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
            {technologies?.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
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
