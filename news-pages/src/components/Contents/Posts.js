import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <Layout>
            <header></header>

            {/*   */}

            <footer>
                <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
            </footer>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
`;

export default Posts;
