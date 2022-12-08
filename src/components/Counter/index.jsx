import React from 'react';
import { connect } from 'react-redux';
import { setLang } from '../../store/slices/langSlice';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import CONSTANTS from '../../constants';
const {
  LANGUAGE: { EN_US, UA_UA },
} = CONSTANTS;

const translations = new Map([
  [
    EN_US,
    {
      countText: 'Count',
      stepText: 'Step',
      incrementText: 'Increment',
      decrementText: 'Decrement',
    },
  ],
  [
    UA_UA,
    {
      countText: 'Рахунок',
      stepText: 'Крок',
      incrementText: 'Збільшити',
      decrementText: 'Зменшити',
    },
  ],
]);

const Counter = (props) => {
  const { count, step, language, increment, decrement, setStep, setLang } =
    props;

  const translation = translations.get(language);
  const { countText, stepText, incrementText, decrementText } = translation;
  return (
    <div>
      <select
        value={language}
        onChange={({ target: { value } }) => setLang(value)}
      >
        <option value={EN_US}>English</option>
        <option value={UA_UA}>Ukrainian</option>
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
  // return state.counter;
  return {
    // count: state.counter.count,
    // step: state.counter.step,
    ...state.counter,
    language: state.lang,
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
