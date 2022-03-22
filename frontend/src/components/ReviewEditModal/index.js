import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewEditForm from "./ReviewEditForm";

function ReviewEditModal({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="review-options-edit"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewEditForm reviewToEdit={review} />
        </Modal>
      )}
    </>
  );
}

export default ReviewEditModal;
