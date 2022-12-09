import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const language = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const setLanguage = (newLang) => dispatch(setLang(newLang));
  const setNewStep = (newStep) => dispatch(setStep(newStep));

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
        onChange={({ target: { value } }) => setLanguage(value)}
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
          onChange={({ target: { value } }) => setNewStep(value)}
        />
      </label>
      <button onClick={() => dispatch(increment())}>{incrementText}</button>
      <button onClick={() => dispatch(decrement())}>{decrementText}</button>
    </div>
  );
};

export default Counter;
