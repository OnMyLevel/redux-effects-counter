import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div >
        <h1 >Counter</h1>
          <button onClick={this.props.reduxIncreaseCounter}> +</button>
          <span>{this.props.counter}</span>
          <button onClick={this.props.reduxDecreaseCounter}> -</button>
      </div>
    )
  }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);
  return {
    counter: state.counter.counter,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch({
      type: 'INCREASE_COUNTER',
      value: 1,
    }),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch({
      type: 'DECREASE_COUNTER',
      value: 1,
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);