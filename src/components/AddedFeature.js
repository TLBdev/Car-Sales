import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../redux/actions/action'
const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature.id)}>X</button>
      <p>{props.feature.name}</p>
    </li>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps, { removeFeature })(AddedFeature);

