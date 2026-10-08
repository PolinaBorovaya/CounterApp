import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Post } from '../../store/activitySlice';
import * as styles from './styles';

export interface ActivityProps {
    posts: Post[];
    loading: boolean;
    error: string | null;
    onFetch: () => void;
}

const Activity = ({ posts, loading, error, onFetch }: ActivityProps) => {
    return (
        <div style={styles.rootStyles}>
            <h1 style={styles.titleStyles}>Активность</h1>

            <div style={styles.buttonWrapperStyles}>
                <Button
                    themeColor="primary"
                    fillMode="solid"
                    onClick={onFetch}
                    disabled={loading}
                >
                    Получить активность
                </Button>
            </div>

            {loading && (
                <p style={styles.loadingStyles}>Загрузка...</p>
            )}

            {error && (
                <p style={styles.errorStyles}>{error}</p>
            )}

            {posts.length > 0 && (
                <div style={styles.listStyles}>
                    {posts.map((post) => (
                        <div key={post.id} style={styles.postStyles}>
                            <h3 style={styles.postTitleStyles}>{post.title}</h3>
                            <p style={styles.postBodyStyles}>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Activity;