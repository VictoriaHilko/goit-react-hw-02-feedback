import css from './Statistics.module.css'

export const Statistics = (({ good, neutral, bad, totalCount, positivePercentage }) => {
    return (
        <ul className={css.list}>
            <li className={css.listItems}>
                <span className={css.itemName}>Good:</span>
                <span>{good}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Neutral:</span>
                <span>{neutral}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Bad:</span>
                <span>{bad}</span>
            </li>
            <li className={css.listItems, css.total}>
                <span className={css.itemName}>Total:</span>
                <span className={css.stat}>{totalCount}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Positive feedback:</span>
                <span className={css.stat}>{positivePercentage}%</span>
            </li>
        </ul>
    );
});
