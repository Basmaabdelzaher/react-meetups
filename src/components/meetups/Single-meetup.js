import React from 'react';
import classes from './Single-meetup.module.css';
import Card from '../ui/Card';
import { useContext } from 'react'; 
import FavoritesContext from '../../store/favorites-context';

function SingleMeetup({ meetup }) {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite= favoritesCtx.isFavorite(meetup.id);

  function addFavoriteHandler (){
    if(isFavorite)
      favoritesCtx.removeFavorite(meetup.id);
    else
      favoritesCtx.addFavorite(meetup);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={addFavoriteHandler}>{isFavorite? 'Remove From Favorites' : 'Add To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
} export default SingleMeetup;