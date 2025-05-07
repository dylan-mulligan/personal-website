import { Theme } from '@mui/material/styles';

export function hoverableContainerStyle(theme: Theme) {
 return {
     border: `2px solid ${theme.palette.divider}`,
     transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
     '&:hover': {
         border: `2px solid ${theme.palette.info.main}`,
         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
     },
 }
}
