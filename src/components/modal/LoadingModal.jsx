import React from 'react';
import Modal from '@mui/material/Modal';
import SimpleLoader from '../loaders/SimpleLoader';

export default function LoadingModal({show}) {
  return (
    <div>
      <Modal
        open={show}
        className="flex justify-center items-center"
      >
        <div>
          <SimpleLoader />
        </div>
      </Modal>
    </div>
  )
}