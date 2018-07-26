import React from 'react';
import PropTypes from 'prop-types';

class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const property = e.target.value;
    const { onChange } = this.props;
    onChange(property);
  }

  render() {
    return (
      <div>
        <select id="propertyid" onChange={this.handleChange}>
          <option value="1">property1</option>
          <option value="2">property2</option>
          <option value="3">property3</option>
        </select>
      </div>
    );
  }
}

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Selector;
