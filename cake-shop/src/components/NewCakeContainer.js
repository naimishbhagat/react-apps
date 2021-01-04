import React, { useState } from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
function NewCakeContainer({ buyCake, numOfCakes }) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
