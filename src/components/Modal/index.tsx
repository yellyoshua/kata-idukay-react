import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./index.css"

export default function Modal(props: { isOpen: boolean, onClose: () => void, children: ReactNode }) {
  if (props.isOpen) {
    return createPortal(
      <div className="modal-container">
        <div className="modal-card">
          {props.children}
          <button className="modal-card-close" onClick={props.onClose}>x</button>
        </div>
      </div>,
      document.getElementById('modal')!
    )
  }
  return null;
}