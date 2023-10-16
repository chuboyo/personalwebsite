// import AddressIcon from '../icons/address-icon';
// import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { name, tools, image, imageAlt } = props;


  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      
      <ul className={classes.list}>
      <LogisticsItem>
          <time>{name}</time>
        </LogisticsItem>
        <LogisticsItem>
          <time>{tools}</time>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;