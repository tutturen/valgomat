import React from 'react';

class TitleBar extends React.Component {

  render() {
    return (
      <div className="titleBar">
        { this.props.categoryCount > 0 &&
          <span className="categoryCount">
            {this.props.categoryNumber} av {this.props.categoryCount} |
          </span>
        }
        <span className="categoryName"> {this.props.categoryName}</span>
      </div>
    );
  }
}

TitleBar.propTypes = {
  categoryName: React.PropTypes.string,
  categoryCount: React.PropTypes.number,
  categoryNumber: React.PropTypes.number,
};

export default TitleBar;
