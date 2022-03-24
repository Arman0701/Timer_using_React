import './Styles/Buttons.css';

export default function Buttons({ start, stop, reset }) {
    return (
        <div className='buttonsContainer'>
            <div className='button' onClick={start}>Start</div>
            <div className='button' onClick={stop}>Stop</div>
            <div className='button' onClick={reset}>Reset</div>
        </div>
    );
}
