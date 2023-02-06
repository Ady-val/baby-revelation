import React from 'react'

export function ModalCancelButton({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="modal-buttons bg-gray-200 border-gray-400 hover:bg-gray-300"
    >
      {text}
    </button>
  )
}

export function ModalAlertAcceptButton({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="modal-buttons bg-red-100 border-red-300 hover:bg-red-200"
    >
      {text}
    </button>
  )
}

export function ModalAcceptButton({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="modal-buttons bg-gray-200 border-gray-400 hover:bg-gray-300"
    >
      {text}
    </button>
  )
}

export function AcceptButton({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {text}
    </button>
  )
}

export function SecondaryButton({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="button-secondary"
    >
      {text}
    </button>
  )
}