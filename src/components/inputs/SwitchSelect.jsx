import * as React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';

const SwitchSelect = styled(Switch)(({ theme }) => ({
  inputProps: { 'ariaLabel': 'Switch' },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#B0B6C1' : '#B0B6C1',
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#4FC6DB' : '#4FC6DB',
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#4FC6DB',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#B0B6C1' : '#B0B6C1',
      },
    },
  },
}));

export default function BasicSwitches({onChange}) {
  return (
    <div>
      <SwitchSelect onChange={onChange} />
    </div>
  );
}