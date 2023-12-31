import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';


function HomePage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList events={allEvents} />
    </div>
  )
}

export default HomePage