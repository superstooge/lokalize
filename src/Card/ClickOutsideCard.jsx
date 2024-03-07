import React, { Component } from 'react';
import withClickOutside from 'react-click-outside';
// eslint-disable-next-line import/no-cycle
import Card from './Card';

class ClickOutsideCard extends Component {
  static defaultProps = {
    ignoreModalClicks: true,
  };

  handleClickOutside = (e) => {
    const { ignoreModalClicks, onClickOutside, ignoreElementId } = this.props;

    if (ignoreModalClicks && document.getElementById('modal-root').contains(e.target)) {
      // Do not count modal clicks as outside
      return;
    }

    if (ignoreElementId && ignoreElementId === e.target.id) {
      // pass an id if you need to ignore click on an element
      // for example, to prevent double toggle bug on a button/input
      return;
    }

    onClickOutside(e);
  };

  render() {
    const { onClickOutside, ignoreModalClicks, ignoreElementId, ...props } = this.props;
    return <Card {...props} />;
  }
}

export default withClickOutside(ClickOutsideCard);
