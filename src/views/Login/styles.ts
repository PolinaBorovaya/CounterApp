import { CSSProperties } from 'react';

export const rootStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    gap: '24px',
};

export const formStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '400px',
    padding: '24px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
};

export const titleStyles: CSSProperties = {
    margin: 0,
    fontSize: '24px',
    fontWeight: 600,
    textAlign: 'center',
};

export const fieldStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
};

export const inputStyles: CSSProperties = {
    padding: '10px 12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
};

export const errorStyles: CSSProperties = {
    color: '#d32f2f',
    fontSize: '14px',
};

export const previewStyles: CSSProperties = {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    fontSize: '15px',
};