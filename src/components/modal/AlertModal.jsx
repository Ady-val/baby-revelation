import React from 'react';
import Modal from '@mui/material/Modal';
import { ModalAlertAcceptButton, ModalCancelButton } from '../buttons/ModalButtons';

export default function AlertConfirmModal({showModal, onCloseModal, onHandleAccept, onHandleCancel}) {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={onCloseModal}
        className="flex justify-center items-center"
      >
        <div className="h-28 w-[25rem] bg-menu rounded-xl flex flex-col py-2 px-4">
          <div className="h-2/5 flex items-center">
            <span className="tool-subtitles">¿Estás seguro de borrar el dato seleccionado?</span>
          </div>
          <div className="h-3/5 flex justify-end items-center space-x-4">
            <ModalCancelButton text={"Cancelar"} onClick={onHandleCancel} />
            <ModalAlertAcceptButton text={"Aceptar"} onClick={onHandleAccept} />
          </div>
        </div>
      </Modal>
    </div>
  );
}