import { CSSProperties } from 'react';

export const counterStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '24px',
    backgroundColor: '#d7e7f8',
    borderRadius: '12px',
    boxSizing: 'border-box',
    gap: '16px',
};

export const titleStyles: CSSProperties = {
    margin: 0,
    color: '#000',
    fontWeight: 600,
};

export const valueStyles: CSSProperties = {
    fontSize: '48px',
    fontWeight: 800,
    color: '#1976d2',
    lineHeight: 1,
};

export const buttonsStyles: CSSProperties = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
};