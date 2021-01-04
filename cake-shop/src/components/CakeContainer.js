import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
function CakeContainer({ buyCake, numOfCakes }) {
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
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
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
