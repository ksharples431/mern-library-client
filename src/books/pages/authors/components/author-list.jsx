import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import './author-list.scss';

export const Authors = ({ book }) => {
  return (<h1>{book.author}</h1>)
};

export const AuthorList = ({ book }) => {
  return (
    <ListGroup variant="flush" className="list-group">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start list">
        <div className="ms-2 me-auto">
          <Link
            style={{ textDecoration: 'none' }}
            to={`/books/${encodeURIComponent(book.id)}`}>
            <div className="fw-bold">{book.title}</div>
          </Link>

        </div>
        <Button className="button" bg="primary">
          <i className="fi fi-rr-headphones"></i>
        </Button>
        <Button className="button" bg="primary">
          <i className="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i className="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i className="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i className="fi fi-rr-heart"></i>
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

// AuthorList.propTypes = {
//   book: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     genre: PropTypes.string,
//     series: PropTypes.string,
//     number: PropTypes.number,
//     description: PropTypes.string,
//     owned: PropTypes.bool,
//     read: PropTypes.bool,
//     favorite: PropTypes.bool,
//   }).isRequired,
// };
