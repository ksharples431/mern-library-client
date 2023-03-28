import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../main-view/main-view';
import { SignupView } from '../../users/pages/signup/signup';
import { LoginView } from '../../users/pages/login/login';
import { Profile } from '../../users/pages/profile/profile';
import { Books } from '../../books/pages/titles/titles';
import { Authors } from '../../books/pages/authors/authors';
import { Genres } from '../../books/pages/genres/genres';
import { Series } from '../../books/pages/series/series';
import { Favorites } from '../../books/pages/favorites/favorites';
import { Que } from '../../books/pages/que/que';
import { Owned } from '../../books/pages/owned/owned';
import { Read } from '../../books/pages/read/read';
import { Type } from '../../books/pages/type/type';
import { Availability } from '../../books/pages/availability/availability';
import { BookList } from '../../books/components/book-list/book-list';
import { BookView } from '../../books/components/book-view/book-view';
import { BookCard } from '../../books/components/book-card/book-card';
import { NavigationBar } from '../../shared/components/nav-bar/nav-bar.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main-view.scss';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!token) return;

    async function fetchBooks() {
      const response = await fetch(
        'https://my-books-series-tracker.herokuapp.com/books',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      const booksFromAPI = data.map((book) => {
        return {
          id: book._id,
          image: book.image,
          title: book.title,
          author: book.author,
          genre: book.genre,
          series: book.series,
          number: book.number,
          description: book.description,
          owned: book.owned,
          read: book.read,
          favorite: book.favorite,
        };
      });
      setBooks(booksFromAPI);
    }
    fetchBooks();
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {books.map((book) => (
                      <BookList book={book} id="book.id" />
                    ))}
                  </>
                )}
              </>
            }
          />
          {/* <Route path="/signup" element={Signup} />
          <Route path="/login" element={Login} /> */}
          <Route path="/profile" element={Profile} />
          {/* <Route path="/books" element={Books} /> */}
          <Route path="/authors" element={Authors} />
          <Route path="/genres" element={Genres} />
          <Route path="/series" element={Series} />
          <Route path="/favorites" element={Favorites} />
          <Route path="/que" element={Que} />
          <Route path="/owned" element={Owned} />
          <Route path="/read" element={Read} />
          <Route path="/type" element={Type} />
          <Route path="/availability" element={Availability} />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
