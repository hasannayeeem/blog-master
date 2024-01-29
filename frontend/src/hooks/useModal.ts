import { useState } from "react";

const useModal = () => {
  const [importModal, setImportModal] = useState({ visible: false });
  const [modalState, setModalState] = useState({});

  const closeModal = (type) => () => {
    if (type) {
      setModalState((prev) => ({
        ...prev,
        [type]: { ...prev[type], visible: false },
      }));
    } else {
      setImportModal({ visible: false });
    }
  };

  const openModal = ({ type, ...rest }) => {
    console.log(type);
    
    if (type) {
      setModalState({ [type]: { ...rest, visible: true } });
    } else {
      setImportModal({ ...rest, visible: true });
    }
  };

  return {
    modalState,
    importModal,
    openModal,
    closeModal,
  };
};

export default useModal
