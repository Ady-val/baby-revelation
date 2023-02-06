import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

function textCell(value) {
  const text = value;

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} TransitionComponent={Fade} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      boxShadow: "5px 5px 10px #d5d5d5, -5px -5px 10px #d5d5d5",
    },
  }));

  return (
    <LightTooltip title={<div className="flex items-center text-fonttext">{text}</div>} placement="top-start">
      <div className="text-sm truncate">
        <FaInfoCircle />
      </div>
    </LightTooltip>
    
  );
};

function TooltipInfo({text, className}) {
  return (
    <div className={className}>
      {textCell(text)}
    </div>
  );
}

export default TooltipInfo;
