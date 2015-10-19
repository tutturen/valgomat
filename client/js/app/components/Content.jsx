import React from 'react';

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  children: React.PropTypes.array,
};

export default Content;
