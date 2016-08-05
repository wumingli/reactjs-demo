import React from 'react/addons';

require('../../css/anim.css');


let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let reqFrame = -1;

var AnimateDemo = React.createClass({
    getInitialState: function() {
        return {
            items: ['hello', 'world', 'click', 'me'],
            left: 0
        };
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);

        cancelAnimationFrame(reqFrame);
        this.setState({items: newItems});
        this.resolveAnimationFrame();
    },
    handleRemove: function(i) {
        cancelAnimationFrame(reqFrame);
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
        this.resolveAnimationFrame();
    },
    componentDidMount() {
        this.setState({
            left: 1,
        });
    },
    componentWillUpdate: function() {
        reqFrame = requestAnimationFrame(this.resolveAnimationFrame);
    },
    componentWillUnmount() {
        cancelAnimationFrame(reqFrame);
    },
    resolveAnimationFrame: function() {
        if(this.state.left <= global.innerWidth) {
            this.setState({
                left: this.state.left + 1
            });
        } else {
            this.setState({
                left: 1
            });
        }
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <li key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </li>
            );
        }.bind(this));
        return (
            <div className="animate-list">
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup transitionName="example" component="ul">
                    {items}
                </ReactCSSTransitionGroup>
                <div className="animate-con">
                    <img className="animate-image" style={{left: this.state.left + 'px', position: 'relative'}} src="http://img.58cdn.com.cn/logo/m58/40_40/logo.png" />
                </div>
            </div>
        );
    }
});

export default AnimateDemo;