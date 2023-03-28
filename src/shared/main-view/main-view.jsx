import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../main-view/main-view';
import { Signup } from '../../users/pages/signup/signup';
import { Login } from '../../users/pages/login/login';
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
import './main-view.scss';

export const MainView = () => {
  return (
    <BrowserRouter>
    <h1>hello</h1>
      <Routes>
        <Route path="/" element={ Home } />
        <Route path="/signup" element={ Signup } />
        <Route path="/login" element={ Login } />
        <Route path="/profile" element={ Profile } />
        <Route path="/books" element={ Books } />
        <Route path="/authors" element={ Authors } />
        <Route path="/genres" element={ Genres } />
        <Route path="/series" element={ Series } />
        <Route path="/favorites" element={ Favorites } />
        <Route path="/que" element={ Que } />
        <Route path="/owned" element={ Owned } />
        <Route path="/read" element={ Read } />
        <Route path="/type" element={ Type } />
        <Route path="/availability" element={ Availability } />
      </Routes>
    </BrowserRouter>
  );
};
