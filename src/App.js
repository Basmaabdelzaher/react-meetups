import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/react-meetups" element={ <AllMeetupsPage /> }>
        </Route>
        <Route path="/react-meetups/new-meetup" element={ <NewMeetupPage /> }>
        </Route>
        <Route path="/react-meetups/favorites" element={ <FavoritesPage /> }>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
