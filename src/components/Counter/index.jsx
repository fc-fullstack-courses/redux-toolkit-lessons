import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setLang } from '../../store/slices/langSlice';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import styles from './Counter.module.scss';
import CONSTANTS from '../../constants';
const {
  LANGUAGE: { EN_US, UA_UA },
  LANGUAGE,
  THEMES,
} = CONSTANTS;

const translations = new Map([
  [
    EN_US.VALUE,
    {
      countText: 'Count',
      stepText: 'Step',
      incrementText: 'Increment',
      decrementText: 'Decrement',
    },
  ],
  [
    UA_UA.VALUE,
    {
      countText: 'Рахунок',
      stepText: 'Крок',
      incrementText: 'Збільшити',
      decrementText: 'Зменшити',
    },
  ],
]);

const Counter = (props) => {
  const {
    count,
    step,
    language,
    theme,
    increment,
    decrement,
    setStep,
    setLang,
  } = props;

  const translation = translations.get(language);
  const { countText, stepText, incrementText, decrementText } = translation;

  const className = cx({
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHTL,
  });

  return (
    <div className={className}>
      <select
        value={language}
        onChange={({ target: { value } }) => setLang(value)}
      >
        {Object.values(LANGUAGE).map((langObj) => (
          <option key={langObj.VALUE} value={langObj.VALUE}>
            {langObj.OPTION_TEXT}
          </option>
        ))}
      </select>
      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}:{' '}
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => setStep(value)}
        />
      </label>
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decrementText}</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.counter,
    language: state.lang,
    theme: state.theme,
  };
}
// v1
// function mapDispatchToProps(dispatch) {
//   return {
//     incrementCb: () => dispatch(increment()),
//     decrementCb: () => dispatch(decrement()),
//     setStepCb: ({ target: { value } }) => dispatch(setStep(value)),
//     setStep: (value) => dispatch(setStep(value)),
//   };
// }

// v2
const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
  setLang,
};
// const withState = connect(mapStateToProps);
// const CounterWithState = withState(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
