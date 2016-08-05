import React from 'react';
import {Link} from 'react-router';

let Success = React.createClass({
    render() {
        return(<div className="success-con">
            <h3>恭喜，提交成功!</h3>
            <Link to="app" className="suc-link">返回首页</Link>
        </div>);
    }
});

export default Success;