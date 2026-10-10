import { CSSProperties } from 'react';

export const rootStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    gap: '24px',
};

export const titleStyles: CSSProperties = {
    margin: 0,
    fontSize: '28px',
    fontWeight: 600,
    color: '#333',
};

export const buttonWrapperStyles: CSSProperties = {
    marginBottom: '8px',
};

export const loadingStyles: CSSProperties = {
    fontSize: '18px',
    color: '#1976d2',
};

export const errorStyles: CSSProperties = {
    fontSize: '16px',
    color: '#d32f2f',
    textAlign: 'center',
};

export const listStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '800px',
};

export const postStyles: CSSProperties = {
    padding: '16px 20px',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
};

export const postTitleStyles: CSSProperties = {
    margin: '0 0 8px 0',
    fontSize: '18px',
    fontWeight: 600,
    color: '#1976d2',
    textTransform: 'capitalize',
};

export const postBodyStyles: CSSProperties = {
    margin: 0,
    fontSize: '14px',
    color: '#555',
    lineHeight: 1.5,
};