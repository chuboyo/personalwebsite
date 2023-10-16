import React from 'react';
import EventItem from './EventItem';
import classes from './event-list.module.css';

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map(event => 
      <EventItem key={event.id} title={event.title} 
        description={event.description} 
        image={event.image} 
        url={event.url}
        id={event.id}/> )}
    </ul>
  )
}

export default EventList