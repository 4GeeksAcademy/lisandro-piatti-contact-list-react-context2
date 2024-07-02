import React from "react";

export const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete confirmation</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete the contact?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
