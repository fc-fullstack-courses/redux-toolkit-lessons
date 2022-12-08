import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';

const Counter = (props) => {
  const { count, step, dispatch } = props;
  return (
    <div>
      <p>Count: {count}</p>
      <label>
        Step:{' '}
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => dispatch(setStep(value))}
        />
      </label>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
    step: state.step,
  };
}

// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

export default connect(mapStateToProps)(Counter);
