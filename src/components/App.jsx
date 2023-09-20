import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import { Container } from './SharedLayout/SharedLayout.styled';

// import { SharedLayout } from './SharedLayout/SharedLayout';
// import { HomePage } from './pages/HomePage';
// import { MoviesPage } from './pages/MoviesPage';
// import { MovieDetailsPage } from './pages/MovieDetailsPage';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('components/pages/HomePage'));
const MoviesPage = lazy(() => import('components/pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('components/pages/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
  );
};
