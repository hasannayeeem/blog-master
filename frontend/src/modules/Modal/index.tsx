import { Modal } from "antd";
import CreateDonor from "./CreateDonor";
import CreateEvent from "./CreateEvent";
import CreateSponsor from "./CreateSponsor";

const modals = {
  createDonor: CreateDonor,
  createEvent: CreateEvent,
  createSponsor: CreateSponsor,
};

const BaseModal = ({ modalType, ...rest }) => {
  const ModalContent = modals[modalType];
  const { onCancel, pointer, id } = rest;
  console.log(modalType);
  
  return (
    <Modal {...rest}>
      {ModalContent && (
        <ModalContent {...rest} close={onCancel} pointer={pointer} id={id} />
      )}
    </Modal>
  );
};

export default BaseModal;
