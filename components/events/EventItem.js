import React from 'react';
import Button from '../ui/Button';
// import DateIcon from '../icons/date-icon';
// import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';


function EventItem(props) {
    const {title, description, image, url, id} = props


  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title}/>
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.address}>
                <p>{description}</p>
            </div>
        </div>
        <div className={classes.actions}>
            <Button link={url}>
                <span>Explore project</span>
                <span className={classes.icon}><ArrowRightIcon></ArrowRightIcon></span>
            </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem