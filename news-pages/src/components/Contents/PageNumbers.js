import './PageNumbers.css';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageNumbers() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return <div></div>;
}

// const Layout = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: 800px;
//     margin: 0 auto;
// `;

export default PageNumbers;
