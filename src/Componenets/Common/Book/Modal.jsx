import React, { useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './book.css';

const Modal = ({ active, setActive }) => {
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="modal-content"
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button className="modal-close" onClick={() => setActive(null)}>&times;</button>
            <img src={active.cover} alt={active.title} className="modal-image" />
            <div className="modal-details">
              <div className="modal-title">
                {active.title}
                <span className="modal-author">-{active.author}</span>
              </div>
              <div className="modal-description">{active.description}</div>
              <a href="#read-more" className="read-button">Read More</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
