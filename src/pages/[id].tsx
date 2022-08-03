import { GetServerSideProps } from 'next';
import { Blog, Props } from '../client/components/pages/Blog/Blog';
import { fetch } from '../shared/utils/fetch';
import { BlogPost } from '../shared/types/blog-post';

export const getServerSideProps: GetServerSideProps<Props> = async (
    context,
) => {
    const id = context.query.id;
    const post = await fetch<BlogPost>(`/api/blog-posts/${id}`);

    return { props: { post } };
};

export default Blog;
