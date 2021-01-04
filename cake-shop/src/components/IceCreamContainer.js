import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { connect } from "react-redux";

function IceCreamContainer({ numOfIceCreams, buyIceCream }) {
  return (
    <div>
      <div className="ice-cream">
        Number of IceCreams: {numOfIceCreams}
        <br />
        <button onClick={buyIceCream}>Buy Ice Cream</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
