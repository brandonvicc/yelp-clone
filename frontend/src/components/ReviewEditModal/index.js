import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewEditForm from "./ReviewEditForm";
import "./ReviewEditModal.css";

function ReviewEditModal({ review, toggleOptions }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
  };

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
          <ReviewEditForm
            reviewToEdit={review}
            closeModal={closeModal}
            toggleOptions={toggleOptions}
          />
        </Modal>
      )}
    </>
  );
}

export default ReviewEditModal;
