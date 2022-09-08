import React from 'react';
import SingleMeetup from './Single-meetup';
import classes from './MeetupList.module.css';


function MeetupList(props) {
    return (
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <SingleMeetup
            key={meetup.id}
            meetup={meetup}
          />
        ))}
      </ul>
    );
  } export default MeetupList;