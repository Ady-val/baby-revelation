import React from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination, useRowSelect } from 'react-table'
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from "react-icons/ti"
import TooltipInfo from '../misc/TooltipInfo'
// import BlueScroll from '../misc/ColoredScroll';

export function textPrimary({value}) {
  const text = value;

  return (
    <div className="text-center text-primary text-sm">
      {text}
    </div>
    
  );
}

export function textSecondary({value}) {
  const text = value;

  return (
    <div className="text-center text-secondary text-sm">
      {text}
    </div>
    
  );
}

export function SimpleTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  },
  useFilters,
  useGlobalFilter,
  useSortBy,
  useRowSelect
  )
  return (
    <div className="">
      <div className="rounded-t-xl border-x border-t border-[#C4C4C4] bg-[#EAEAEA] overflow-hidden">
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="flex flex-row">
            {headerGroup.headers.map(column => (
              <div
                scope="col"
                className="px-1 py-3.5 text-center text-sm font-medium text-secondary bg-[#EAEAEA] w-full"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <div className={"flex items-center justify-center"}>
                  {column.render('Header')}
                  <TooltipInfo text={column.tooltip} className={"mx-1"} />
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <TiArrowSortedDown />
                        : <TiArrowSortedUp />
                      : (
                        <TiArrowUnsorted />
                      )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="rounded-b-xl border-x border-b border-[#C4C4C4] h-[15rem] overflow-auto">
        {/* <BlueScroll> */}
          <table {...getTableProps()} className="min-w-full">
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-bgsecondary"
            >
              {rows.map((row, i) => {  // new
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} className="">
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-3.5 whitespace-nowrap bg-white"
                          role="cell"
                        >
                          {cell.column.Cell.name === "defaultRenderer"
                            ? <div className="text-md w-24 truncate">{cell.render('Cell')}</div>
                            : cell.render('Cell')
                          }
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        {/* </BlueScroll> */}
      </div>
    </div>
  )
}