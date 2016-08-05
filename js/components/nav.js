import React from 'react';
import {Link} from 'react-router';

let Nav = React.createClass({
    render() {
        return (
            <ul className="nav">
                <li>
                    <Link to="app" className="homelink">首页</Link>
                </li>
                <li className="search-item">
                </li>
                <li>
                    <Link to="animate">动画</Link>
                </li>
                <li>
                    <Link to="submit" className="submit-icon">发布</Link>
                </li>
                <li>
                    <Link to="my" className="my-icon">我的</Link>
                </li>
            </ul>
        );
    }
});

export default Nav;
