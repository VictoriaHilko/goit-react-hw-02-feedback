import css from './Feedback.module.css';
import PropTypes from "prop-types";

export const Feedback = (({ options, handleClick }) => {
    return (
        <>
            <ul className={css.container}>
                {options.map((option, index) => {
                    const label = option.charAt(0).toUpperCase() + option.slice(1);

                    return (
                        <li key={index}>
                            <button type="button" className={css.feedbackButton} onClick={() => handleClick(option)}>
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
});

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
};