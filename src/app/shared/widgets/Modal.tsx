"use client";

import { createPortal } from "react-dom";

import globalStyles from "../../layout.module.css";
import styles from "./Modal.module.css";

interface ModalButton {
  label: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

interface ModalProps {
  children: React.ReactNode;
  buttons: ModalButton[];
  onClose?: () => void;
}

export default function Modal({ children, buttons, onClose }: ModalProps) {
  if (typeof window === "undefined") return null;

  const handleClick = (action: () => void) => () => {
    onClose?.();
    action();
  };

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div>{children}</div>
        <div className={styles.popupButtonWrap}>
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className={globalStyles[btn.type || "primary"]}
              onClick={handleClick(btn.onClick)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
