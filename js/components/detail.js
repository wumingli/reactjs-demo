import React from 'react';
import Popup from './popup';
import Loading from './loading';

let Detail = React.createClass({

    getInitialState() {
        return {
            data: null,
            showLoading: true,
        };
    },

    componentWillMount() {
        this.getDetail();
    },

    getDetail() {
        let url = `http://www.wml.com/reactjs-demo1/data/detail.json?id=${this.props.params.id}`;
        fetch(url).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setTimeout(() => {
                        this.setState({
                            data: data.data,
                            showLoading: false,
                        });
                    }, 300);
                });
            }
        });
    },

    render() {
        if (this.state.data === null) {
            console.log('loading detail data...');
            return <Loading show={this.state.showLoading} />;
        }

        let detailData = this.state.data;
        let mobileData = detailData.mobile;
        let imgIndex = parseInt(Math.random() * 7, 10);

        return (
            <div className="detail-con">
                <div><img src={mobileData.image[imgIndex]} width="100%" /> </div>
                <h2 className="mobile-price">￥{mobileData.price} <i>￥{mobileData.origin_price}</i></h2>
                <p className="mobile-detail">{mobileData.description}</p>
                <MobileInfo data={mobileData.status} />
                <User data={detailData.user} />
                <Comments data={detailData.comments} />
            </div>
        );
    }
});
/*手机特点*/
class MobileInfo extends React.Component {
    render() {
        let info = this.props.data;
        return (<ul className="mobile-info">
            {info.map((data, index) => {
                return (<li key={`info-${index}`}>{data}</li>);
            })}
        </ul>);
    }
}
//用户信息
class User extends React.Component {
    render() {
        let data = this.props.data;
        return(<div className="user-info">
            <dl>
                <dt><img src={data.avatar} /></dt>
                <dd>{data.name} {data.province}</dd>
                <dd>评价<i>{data.comments}</i> 买过<i>{data.buy_count}</i> 加入转转{data.join_time}</dd>
            </dl>
        </div>);
    }
}
//留言区
let Comments = React.createClass({
    getInitialState() {
        return {
            show: false
        };
    },
    hidePopup() {
        this.setState({
            show: false
        });
    },
    showPopup() {
        console.log(this.state);
        this.setState({
            show: true,
        });
    },
    _renderComment(data) {
        return data.map((item) => {
            return (
                <li key={item.name}>
                    <img src={item.avatar} />
                    <h3>
                        {item.name}
                        <p>{item.content}</p>
                    </h3>
                    <p className="time-line">{item.timeline}</p>
                </li>
            );
        });
    },
    render() {
        let data = this.props.data;
        //console.log(data);
        return (<div className="comments-con">
            <Popup show={this.state.show}
                   content="来转转聊一聊详细的商品信息吧~"
                   hidePopup={this.hidePopup} />
            <p className="comment-on-zz">转转上的留言{data.length}</p>
            <ul className="comment-list">
                {this._renderComment(data)}
            </ul>
            <button className="comment-more"
                    onClick={this.showPopup}>查看更多留言</button>
        </div>);
    }
});

export default Detail;
