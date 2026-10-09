import { CSSProperties } from 'react';

export const rootStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  minHeight: '100vh',
  gap: '4vh',
  paddingTop: '4vh',
};

export const buttonsStyles: CSSProperties = {
  display: 'flex',
  gap: '2vw',
};

export const titleStyles = {
  margin: 0,
  color: '#000000',
  fontWeight: 600,
};


export const parentCounter: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2vh',
}

export const countersListStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
};