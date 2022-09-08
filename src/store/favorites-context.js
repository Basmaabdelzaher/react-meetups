import React from 'react';
import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupId) => {},
    isItemIsFavorite: (meetupId) => {}

});

export function FavoritesContextProvider (props){
    const [userFavorites, setUserFavorites]= useState([]);
    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: isItemIsFavorite
    };

    function addFavoritesHandler (meetup){
        setUserFavorites((previousFavorites) => {
            return previousFavorites.concat(meetup);
        });
    }

    function removeFavoritesHandler (meetupId){
        setUserFavorites((previousFavorites) => {
            return previousFavorites.filter(meetup => meetup.id != meetupId);
        });
    }

    function isItemIsFavorite (meetupId){
        return userFavorites.some(meetup => meetup.id == meetupId);
    }
    
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
// export { FavoritesContextProvider };