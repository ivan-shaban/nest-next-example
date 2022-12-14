import { Home, Props } from '../client/components/pages/Home/Home';
import { GetServerSideProps } from 'next';
import { fetch } from '../shared/utils/fetch';
import { BlogPost } from '../shared/types/blog-post';

export const getServerSideProps: GetServerSideProps<Props> = async (
    context,
) => {
    const blogPosts = await fetch<BlogPost[]>('/api/blog-posts');
    return { props: { blogPosts } };
};

export default Home;
