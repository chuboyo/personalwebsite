import {React, Fragment} from 'react';
import EventSummary from '../components/event-detail/event-summary';
import EventContent from '../components/event-detail/event-content';
import EventLogistics from '../components/event-detail/event-logistics';
// import LogisticsItem from '../../components/event-detail/logistics-item';


function HomePage() {

  return (
    <Fragment>
      <EventSummary title='Bienvenue!'/>
      <EventLogistics 
      name='Chubiyojo Akoji'
      tools='Software Developer'
      linkedin='https://'
      image='images/chubi.jpeg'
      imageAlt='Chubiyojo Akoji'/>
      <EventContent>
        <p>Software engineer experienced in building, testing, deploying and maintaining scalable web applications and machine learning models. 
          A life long learner eager to push the bounds of knowledge and technical innovation.
          Proficient in Python, Javascript, Django, Reactjs, Nextjs, PyTorch, Tensorflow, AWS.</p>
        
      </EventContent>
    </Fragment>
  )
}

export default HomePage
