import {lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Tags = lazy(() => import('./pages/Tags'));
const Articles = lazy(() => import('./pages/Articles'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tags />} />
        <Route path="/:tagName" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}
