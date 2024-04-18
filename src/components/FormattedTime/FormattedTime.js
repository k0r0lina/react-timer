import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
	const formatTime = milliseconds => {
        let minutes = Math.floor(milliseconds / (1000 * 60) % 60);
        let seconds = Math.floor(milliseconds / (1000) % 60);
        let millisecondsLeft = Math.floor((milliseconds % 1000) /10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        millisecondsLeft = String(millisecondsLeft).padStart(2, "0");

        return `${minutes}:${seconds}:${millisecondsLeft}`;
	};
	return (
    <div className={styles.formattedTime}>
        {formatTime(time)}
    </div>
    );
};

export default FormattedTime;