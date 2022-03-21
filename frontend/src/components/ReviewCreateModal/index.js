import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewCreateForm from "./ReviewCreateForm";

function ReviewCreateModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="oneBus-info-actions">
        <button className="oneBus-edit-btn" onClick={() => setShowModal(true)}>
          Leave a Review
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm />
        </Modal>
      )}
    </>
  );
}

export default ReviewCreateModal;
