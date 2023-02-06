import React from "react"
import { textSM, textSMT, textMD, textMDT, textMDTC, textCell, textEmail, configEditDelete, textCellWhatsapp, profileCopy, textXS, goToLink, userStatus, userObjection, userNotes, textCellWhatsappInsurance, userStatus2, whatsappClickRegistry } from "../components/table/Table"
import { textPrimary, textSecondary } from "../components/table/SimpleTable"
import { BiCopy } from "react-icons/bi"

export const segmentationsHeader = [
  {
    Header: "Nombre",
    accessor: "name",
    Cell: textMDT
  },
  {
    Header: "Copiar público a facebook",
    accessor: "copy",
    Cell: profileCopy
  },
  {
    Header: "Incluir personas que coinciden con",
    accessor: "include",
    Cell: textMDTC
  },
  {
    Header: "Y también deben coincidir con",
    accessor: "narrowInclude",
    Cell: textMDTC
  },
  {
    Header: "Excluir personas que coinciden con",
    accessor: "exclude",
    Cell: textMDTC
  }
]