import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
            <div className='row'>
                <ul className='pagination'>
                        {pageNumbers.map((number, i) => (
                            <Link to={number} key={i} style={{textDecoration:"none"}}>
                                <li className="page-item" >
                                        <a onClick={() => { paginate(number) }} className='page-link'>
                                        {number}
                                    </a>
                                </li>
                        </Link>
                    ))}
                </ul>
            </div>
      </div>
  )
}

export default Pagination
