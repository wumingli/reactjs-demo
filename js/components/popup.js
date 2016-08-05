import React from 'react';

require('../../css/popup.css');

let Popup = React.createClass({
    render() {
        let hideStr = '';
        if (!this.props.show) {
            hideStr = ' hide';
        }
        return(
            <div className={'popup' + hideStr}
                    onClick={this.props.hidePopup}>
                <div className="popup-wrapper">
                    <p>{this.props.content || '默认弹窗信息'}</p>
                    <button>确 定</button>
                </div>
            </div>
        );
    }
});

export default Popup;