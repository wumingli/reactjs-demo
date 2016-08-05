import React from 'react';

let Loading = React.createClass({
    render() {
        if (this.props.show) {
            return (
                <div className="loading">
                    <div className="loading-indicator"></div>
                </div>
            );
        }
        return null;
    }
});

export default Loading;