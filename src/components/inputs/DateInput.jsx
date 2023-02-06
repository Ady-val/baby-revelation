import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TooltipInfo from '../misc/TooltipInfo';

function DateInput({title, tooltip, date, setDate}) {
  return (
    <div className='w-[6.5rem]'>
      <div className='flex items-center'>
        {title && <div className="text-base font-medium text-fonttext mb-2">{title}</div>}
        {tooltip && <div className="ml-2 mb-2 text-fonttext"><TooltipInfo text={tooltip} /></div>}
      </div>
      <div className='border border-[#CCCCCC] text-sm rounded-md p-2 bg-menu min-h-[3rem] flex items-center'>
        <DatePicker
          selected={date} 
          onChange={(date) => setDate(date)}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default DateInput