import styles from './Column.module.scss';
import Card  from '../Card/Card.js';
import CardForm  from '../CardForm/CardForm.js';
import { getFilteredCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Column = (props) => {

    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={styles.column}>
    <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
    </h2>
    <ul className={styles.cards}>
        {cards.map(card => (
            <Card key={card.id} title={card.title} />
        ))}
    </ul>
    <CardForm col_id={props.id}/>
</article>
    );
};

export default Column;