import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useRowSelect,
} from "react-table";
import { PageButton, PageNumbersButton } from "./shared/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { BiCopy } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight, FaEdit, FaLink } from "react-icons/fa";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WhatsappContactMini } from "../misc/WhatsappContact";
import { useSnackbar } from "notistack";
import TableUserStatusModal from "../modal/TableUserStatusModal";
import TableUserObjectionModal from "../modal/TableUserObjectionModal";
import TableUserNotesModal from "../modal/TableUserNotesModal";
import TableUserStatusModal2 from "../modal/TableUserStatusModal2";
import { request } from "../../api/request";
import LoadingModal from "../modal/LoadingModal";
import { useAuth } from "../../auth/AuthFunctions";

const PremiumText = () => {
  return (
    <Link
      to="/licencia"
      className="text-fonttext bg-gray-200 rounded flex justify-center"
    >
      ALEX Premium
    </Link>
  );
};

export const userNotes = (e) => {
  const req = request();
  const { enqueueSnackbar } = useSnackbar();
  const text = e.row.original.userNotes;
  const email = e.row.original.email;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleAccept = async (notes) => {
    setLoading(true);
    const res = await req({
      url: "/api/prospects/set-user-lead-notes",
      method: "POST",
      data: {
        newNotes: notes,
        leadId: e.row.original.id,
      },
    });

    if (res.data) {
      window.location.reload(false);
    } else {
      console.log(res);
      setLoading(false);
      setShow(false);
      enqueueSnackbar("Error en el sistema, intente mas tarde.", {
        variant: "error",
      });
    }
  };
  return (
    <div className="flex w-48 items-center">
      <div className="text-sm grow truncate pr-2">{text}</div>
      <button
        onClick={() => setShow(true)}
        className="text-xl text-primary hover:text-primaryhover"
      >
        <FaEdit />
      </button>
      <TableUserNotesModal
        showModal={show}
        onCloseModal={() => setShow(false)}
        onHandleCancel={() => setShow(false)}
        onHandleAccept={(value) => onHandleAccept(value)}
        email={email}
        SavNotes={text}
      />
      <LoadingModal show={loading} />
    </div>
  );
};

export const userObjection = (e) => {
  const req = request();
  const { enqueueSnackbar } = useSnackbar();
  const text = e.row.original.userObjection;
  const email = e.row.original.email;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleAccept = async (objection) => {
    setLoading(true);
    const res = await req({
      url: "/api/prospects/set-user-lead-objection",
      method: "POST",
      data: {
        newObjection: objection,
        leadId: e.row.original.id,
      },
    });

    if (res.data) {
      window.location.reload(false);
    } else {
      console.log(res);
      setLoading(false);
      setShow(false);
      enqueueSnackbar("Error en el sistema, intente mas tarde.", {
        variant: "error",
      });
    }
  };
  return (
    <div className="text-sm w-48 min-w-full truncate flex items-center">
      <div className="grow">{text}</div>
      <button
        onClick={() => setShow(true)}
        className="text-xl text-primary hover:text-primaryhover"
      >
        <FaEdit />
      </button>
      <TableUserObjectionModal
        showModal={show}
        onCloseModal={() => setShow(false)}
        onHandleCancel={() => setShow(false)}
        onHandleAccept={(value) => onHandleAccept(value)}
        email={email}
      />
      <LoadingModal show={loading} />
    </div>
  );
};

export const userStatus = (e) => {
  const req = request();
  const { enqueueSnackbar } = useSnackbar();
  const text = e.row.original.userStatus;
  const email = e.row.original.email;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleAccept = async (status) => {
    setLoading(true);
    const res = await req({
      url: "/api/prospects/set-user-lead-status",
      method: "POST",
      data: {
        newStatus: status,
        leadId: e.row.original.id,
      },
    });

    if (res.data) {
      window.location.reload(false);
    } else {
      console.log(res);
      setLoading(false);
      setShow(false);
      enqueueSnackbar("Error en el sistema, intente mas tarde.", {
        variant: "error",
      });
    }
  };
  return (
    <div className="text-sm w-48 min-w-full truncate flex items-center">
      <div className="grow">{text}</div>
      <button
        onClick={() => setShow(true)}
        className="text-xl text-primary hover:text-primaryhover"
      >
        <FaEdit />
      </button>
      <TableUserStatusModal
        showModal={show}
        onCloseModal={() => setShow(false)}
        onHandleCancel={() => setShow(false)}
        onHandleAccept={(value) => onHandleAccept(value)}
        email={email}
      />
      <LoadingModal show={loading} />
    </div>
  );
};

export const userStatus2 = (e) => {
  const req = request();
  const { enqueueSnackbar } = useSnackbar();
  const text = e.row.original.userStatus;
  const email = e.row.original.email;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleAccept = async (status) => {
    setLoading(true);
    const res = await req({
      url: "/api/prospects/set-user-lead-status",
      method: "POST",
      data: {
        newStatus: status,
        leadId: e.row.original.id,
      },
    });

    if (res.data) {
      window.location.reload(false);
    } else {
      console.log(res);
      setLoading(false);
      setShow(false);
      enqueueSnackbar("Error en el sistema, intente mas tarde.", {
        variant: "error",
      });
    }
  };
  return (
    <div className="text-sm w-48 min-w-full truncate flex items-center">
      <div className="grow">{text}</div>
      <button
        onClick={() => setShow(true)}
        className="text-xl text-primary hover:text-primaryhover"
      >
        <FaEdit />
      </button>
      <TableUserStatusModal2
        showModal={show}
        onCloseModal={() => setShow(false)}
        onHandleCancel={() => setShow(false)}
        onHandleAccept={(value) => onHandleAccept(value)}
        email={email}
      />
      <LoadingModal show={loading} />
    </div>
  );
};

export function profileCopy(e) {
  const text = e.row.original;
  const { enqueueSnackbar } = useSnackbar();

  const handleOnCopyProfile = (text) => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Audiencia copiada!", { variant: "info" });
  };

  return (
    <div className="w-36 min-w-full flex justify-center items-center ">
      <button
        onClick={() => {
          handleOnCopyProfile(
            "Nombre: " +
              text.name +
              "\nIncluir personas que coinciden con: " +
              text.include +
              "\nY también deben coincidir con: " +
              text.narrowInclude +
              "\nExcluir personas que coinciden con: " +
              text.exclude
          );
        }}
        className="w-10 h-8 bg-primary rounded-md text-xl flex justify-center items-center text-menu hover:bg-primaryhover"
      >
        <BiCopy />
      </button>
    </div>
  );
}

export function textCell({ value }) {
  const text = value;
  const { enqueueSnackbar } = useSnackbar();

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Teléfono copiado!", { variant: "info" });
  };

  return (
    <LightTooltip
      title={
        <div className="flex items-center">
          {text}{" "}
          <button
            onClick={() => handleOnClickCopy()}
            className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 ml-1 p-0.5 rounded"
          >
            copiar
          </button>
        </div>
      }
      placement="top-start"
    >
      <div className="text-sm w-24 min-w-full truncate ">{text}</div>
    </LightTooltip>
  );
}

export function textCellWhatsapp(e) {
  const text = e.value;
  let phone = "";
  const { enqueueSnackbar } = useSnackbar();
  const req = request()

  if (text) {
    phone = text.replace(/[^0-9]/g, "");
    if (phone.length < 12) {
      phone = "52" + phone;
    }
  }

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Teléfono copiado!", { variant: "info" });
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const onWhatsappClick = async () => {
    try {
      const res = await req({
        url: "/api/prospects/new-prospect-whatsapp-click",
        method: "POST",
        data: {
          leadId: e.row.original.id
        },
      })
    } catch (error) {
      console.log('Error on whatsapp click');
    }

    // A comprobation have no utility here, but i'll leave it here for dev test
    // if (res.status === 200) {
    //   enqueueSnackbar("Click registrado con éxito", { variant: "success" });
    // } else {
    //   enqueueSnackbar("Error al registrar el click.", { variant: "error" });
    // }
  };

  return e.value !== "NaN" ? (
    <LightTooltip
      title={
        <div className="">
          <button
            onClick={() => handleOnClickCopy()}
            className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 mr-0.5 p-0.5 rounded"
          >
            Copia el número
          </button>{" "}
          o presiona el ícono de WhatsApp para mandar un mensaje.
        </div>
      }
      placement="top-start"
    >
      <div className="flex items-center text-sm w-32 min-w-full overflow-hidden">
        <WhatsappContactMini
          text="Hola"
          number={phone}
          className="w-5 h-5 mr-2 static cursor-pointer"
          whatsappClickRegistry={e => {onWhatsappClick(e)}}
        />
        <span className="overflow-hidden">{phone}</span>
      </div>
    </LightTooltip>
  ) : (
    <div className="text-sm w-36 min-w-full truncate p-1">
      <PremiumText />
    </div>
  );
}

export function textCellWhatsappInsurance(data) {
  const { data: userData } = useAuth();
  const { name } = userData;
  const { value, row } = data;
  const { original } = row;
  const text = value;
  let phone = "";
  const { enqueueSnackbar } = useSnackbar();

  if (text) {
    phone = text.replace(/[^0-9]/g, "");
    if (phone.length < 12) {
      phone = "52" + phone;
    }
  }

  const message = `Hola ${original.name} el día ${original.date} registraste tus datos en un anuncio de redes sociales para pedir informes de un seguro de ${original.tags}.\n\nMi nombre es ${name} te contacto para ponerme a tus ordenes, y ayudarte a obtener el mejor seguro acorde tus necesidades, trabajo con todas las aseguradoras 😉.\n\nA que hora podrías recibir una llamada ?`;

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Teléfono copiado!", { variant: "info" });
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return value !== "NaN" ? (
    <LightTooltip
      title={
        <div className="">
          <button
            onClick={() => handleOnClickCopy()}
            className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 mr-0.5 p-0.5 rounded"
          >
            Copia el número
          </button>{" "}
          o presiona el ícono de WhatsApp para mandar un mensaje.
        </div>
      }
      placement="top-start"
    >
      <div className="flex items-center text-sm w-32 min-w-full overflow-hidden">
        <WhatsappContactMini
          text={message}
          number={phone}
          className="w-5 h-5 mr-2 static"
        />
        <span className="overflow-hidden">{phone}</span>
      </div>
    </LightTooltip>
  ) : (
    <div className="text-sm w-36 min-w-full truncate p-1">
      <PremiumText />
    </div>
  );
}

export function textXS({ value }) {
  const text = value;

  return <div className="text-sm w-16 min-w-full truncate">{text}</div>;
}

export function textSM({ value }) {
  const text = value;

  return <div className="text-sm w-24 min-w-full truncate">{text}</div>;
}

export function textSMT({ value }) {
  const text = value ?? "Indefinido";

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <LightTooltip
      title={<div className="flex m-1">{text}</div>}
      placement="top-start"
    >
      <div className="text-sm w-24 truncate">{text}</div>
    </LightTooltip>
  );
}

export function textMD({ value }) {
  const text = value;

  return <div className="text-sm w-48 min-w-full truncate">{text}</div>;
}

export function textMDT({ value }) {
  const text = value;

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));

  return (
    <LightTooltip title={text} placement="top-start">
      <div className="text-sm w-48 min-w-full truncate">{text}</div>
    </LightTooltip>
  );
}

export function textMDTC({ value }) {
  const text = value;
  const { enqueueSnackbar } = useSnackbar();

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Texto copiado!", { variant: "info" });
  };

  return (
    <LightTooltip
      title={
        <div className="flex items-center">
          {text}{" "}
          <button
            onClick={() => handleOnClickCopy()}
            className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 ml-1 p-0.5 rounded"
          >
            copiar
          </button>
        </div>
      }
      placement="top-start"
    >
      <div className="text-sm w-48 min-w-full truncate">{text}</div>
    </LightTooltip>
  );
}

export function textEmail({ value }) {
  const text = value.toLowerCase();
  const { enqueueSnackbar } = useSnackbar();

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Correo copiado!", { variant: "info" });
  };

  return text && text !== "nan" ? (
    <LightTooltip
      title={
        <div className="flex items-center">
          {text}{" "}
          <button
            onClick={() => handleOnClickCopy()}
            className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 ml-1 p-0.5 rounded"
          >
            copiar
          </button>
        </div>
      }
      placement="top-start"
    >
      <div className="text-sm w-48 min-w-full truncate">{text}</div>
    </LightTooltip>
  ) : value == "NaN" ? (
    <div className="text-sm w-48 min-w-full truncate p-1">
      <PremiumText />
    </div>
  ) : (
    <div className="text-sm w-48 min-w-full truncate">No info</div>
  );
}

export const goToLink = ({ value }) => {
  const text = value;

  return (
    <div className="w-16 min-w-full flex justify-around items-center">
      <a href={text} rel="noopener noreferrer" target="_blank">
        <div className="w-10 h-8 bg-primary rounded-md text-xl flex justify-center items-center text-menu hover:bg-primaryhover">
          <FaLink />
        </div>
      </a>
    </div>
  );
};

export function configEditDelete(
  onHandleEdit,
  onHandleDelete,
  disable,
  disableText
) {
  if (disable) {
    return (
      <div className="w-16 min-w-full flex justify-around items-center">
        {disableText}
      </div>
    );
  } else {
    return (
      <div className="w-16 min-w-full flex justify-around items-center">
        <button
          onClick={onHandleEdit}
          className="text-xl text-primary hover:text-primaryhover"
        >
          <FaEdit />
        </button>
        <button
          onClick={onHandleDelete}
          className="text-xl text-delete hover:text-deletehover"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    );
  }
}

//checkbox
// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef()
//     const resolvedRef = ref || defaultRef

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate
//     }, [resolvedRef, indeterminate])

//     const style = { color: "#4FC6DB"}
//     const style2 = { color: "#BEBEBE"}
//     return (
//       <>
//         <Checkbox disableRipple ref={resolvedRef} {...rest} icon={<BiCheckbox size="28" style={style2} />} checkedIcon={<BiCheckboxSquare size="28" style={style} />} />
//         {/* <input type="checkbox" ref={resolvedRef} {...rest} /> */}
//       </>
//     )
//   }
// )

export function Table({ columns, data, actions }) {
  const [pg1, setPg1] = useState(0);
  const [pg2, setPg2] = useState(1);
  const [pg3, setPg3] = useState(2);
  const [pg4, setPg4] = useState(3);
  const style = { color: "#4FC6DB" };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
    //checkbox
    // hooks => {
    //     hooks.visibleColumns.push(columns => [
    //       {
    //         id: 'selection',
    //         Header: ({ getToggleAllRowsSelectedProps }) => (
    //           <div>
    //             <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    //           </div>
    //         ),
    //         Cell: ({ row }) => (
    //           <div>
    //             <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    //           </div>
    //         ),
    //       },
    //       ...columns,
    //     ])
    //   }
  );
  const handleNextPageButtons = () => {
    if (pg4 < state.pageIndex + 1) {
      setPg1(pg1 + 1);
      setPg2(pg2 + 1);
      setPg3(pg3 + 1);
      setPg4(pg4 + 1);
    }
    nextPage();
  };
  const handlePreviousPageButtons = () => {
    if (pg1 > state.pageIndex - 1) {
      setPg1(pg1 - 1);
      setPg2(pg2 - 1);
      setPg3(pg3 - 1);
      setPg4(pg4 - 1);
    }
    previousPage();
  };
  return (
    <div className="flex flex-col w-full">
      <div className="w-full mt-4 flex flex-col overflow-x-auto">
        {/* <Scrollbars  
        autoHeight 
        autoHeightMax={800}> */}
        <div className="align-middle inline-block min-w-full">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-bgsecondary"
            >
              <thead className="bg-white border-b-2 border-bgsecondary">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="group px-6 py-3.5 text-left text-md font-medium text-black tracking-wider"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <div className={"flex items-center justify-between"}>
                          {column.render("Header")}
                          <span>
                            {/* If the accessor is config, sorted commands do not appear  */}
                            {column.id !== "config" &&
                              (column.isSorted ? (
                                column.isSortedDesc ? (
                                  <TiArrowSortedDown />
                                ) : (
                                  <TiArrowSortedUp />
                                )
                              ) : (
                                <TiArrowUnsorted />
                              ))}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-bgsecondary"
              >
                {page.map((row, i) => {
                  // new
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="hover:drop-shadow-rowsTable"
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-3.5 whitespace-nowrap bg-white"
                            role="cell"
                          >
                            {cell.column.Cell.name === "defaultRenderer" ? (
                              <div className="text-md w-24 truncate">
                                {cell.render("Cell")}
                              </div>
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* </Scrollbars>   */}
      </div>
      <div className="py-3 flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(state.pageIndex + 1) * 10 - 9}
              </span>
              -
              <span className="font-medium">
                {(state.pageIndex + 1) * 10 > data.length
                  ? data.length
                  : state.pageIndex + 1 + "0"}
              </span>{" "}
              of <span className="font-medium">{data.length}</span>
            </span>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <PageButton
                className="mr-2"
                onClick={() => handlePreviousPageButtons()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <FaAngleLeft style={style} />
              </PageButton>

              <div className="border-2 border-gray-300 rounded-xl">
                {pageOptions.length >= 1 && (
                  <PageNumbersButton
                    className={`${
                      state.pageIndex == pg1
                        ? "bg-primary text-slate-50 rounded-xl"
                        : "text-gray-500"
                    }`}
                    onClick={() => gotoPage(pg1)}
                    disabled={state.pageIndex == pg1}
                  >
                    <span className="w-2">{pg1 + 1}</span>
                  </PageNumbersButton>
                )}

                {pageOptions.length >= 2 && (
                  <PageNumbersButton
                    className={`${
                      state.pageIndex == pg2
                        ? "bg-primary text-slate-50 rounded-xl"
                        : "text-gray-500"
                    }`}
                    onClick={() => gotoPage(pg2)}
                    disabled={state.pageIndex == pg2}
                  >
                    <span className="w-2">{pg2 + 1}</span>
                  </PageNumbersButton>
                )}

                {pageOptions.length >= 3 && (
                  <PageNumbersButton
                    className={`${
                      state.pageIndex == pg3
                        ? "bg-primary text-slate-50 rounded-xl"
                        : "text-gray-500"
                    }`}
                    onClick={() => gotoPage(pg3)}
                    disabled={state.pageIndex == pg3}
                  >
                    <span className="w-2">{pg3 + 1}</span>
                  </PageNumbersButton>
                )}

                {pageOptions.length >= 4 && (
                  <PageNumbersButton
                    className={`${
                      state.pageIndex == pg4
                        ? "bg-primary text-slate-50 rounded-xl"
                        : "text-gray-500"
                    }`}
                    onClick={() => gotoPage(pg4)}
                    disabled={state.pageIndex == pg4}
                  >
                    <span className="w-2">{pg4 + 1}</span>
                  </PageNumbersButton>
                )}
              </div>

              <PageButton
                className="mx-2"
                onClick={() => handleNextPageButtons()}
                disabled={!canNextPage}
              >
                <span className="sr-only">Next</span>
                <FaAngleRight style={style} />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
