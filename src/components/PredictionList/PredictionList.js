import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/predictions';

@connect(
    state => ({predictions: state.predictions.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class PredictionList extends Component {
  static propTypes = {
    predictions: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const {predictions, load} = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');

    const areTherePredictions = predictions.data && predictions.data.constructor === Array
    ? true
    : false;

    return (
      <div className={styles.infoBar + ' well'}>
        <div className="container">
          PredictionList
          {' '}
          <span className={styles.time}>{areTherePredictions ? predictions.data.length : 'nan'}</span>
          <button className="btn btn-primary" onClick={load}>Reload from server</button>

          {areTherePredictions && predictions.data.map((item) => <li>{item.id} - {item.text}</li>)}
        </div>
      </div>
    );
  }
}
