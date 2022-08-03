import React, { FC, memo } from 'react';
import { BlogPost } from '../../../../shared/types/blog-post';
import Link from 'next/link';

export interface Props {
    readonly blogPosts?: BlogPost[];
}

export const Home: FC<Props> = memo(function Home({ blogPosts = [] }) {
    return (
        <div>
            <h1>Home</h1>
            {blogPosts.map(({ title, id }) => (
                <div key={id}>
                    <Link href={`/${id}`}>{title}</Link>
                </div>
            ))}
        </div>
    );
});
