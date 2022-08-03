import React, { FC, memo } from 'react';
import Link from 'next/link';
import { BlogPost } from '../../../../shared/types/blog-post';

export interface Props {
    readonly post?: BlogPost;
}

export const Blog: FC<Props> = memo(function Blog({ post = {} }) {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <h1>Blog {post.title}</h1>
        </div>
    );
});
