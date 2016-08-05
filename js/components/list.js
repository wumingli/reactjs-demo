import React from 'react';
import {Link} from 'react-router';
import Loading from './loading';

let Main = React.createClass({
    getInitialState() {
        return {
            showLoading: true
        };
    },
    componentWillMount() {
        this.getData();
    },
    _page: {
        data: [],
        page: 1
    },
    getData() {
        this.setState({
            showLoading: true
        });
        let url = `http://www.wml.com/reactjs-demo1/data/list.json?page=${this._page.page}`;
        fetch(url).
        then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    this._page.data = this._page.data.concat(data.list);
                    this._page.page = this._page.page + 1;
                    setTimeout(() => {
                        this.setState({
                            showLoading: false
                        });
                    }, 300);
                });
            }
        });
    },
    render() {
        if (this._page.data.length === 0) {
            return <Loading show={this.state.showLoading} />;
        }

        return (
            <div>
                <Loading show={this.state.showLoading} />
                <div className="banner">
                    <Link to="letter">
                        <img src="http://www.wml.com/reactjs-demo1/images/banner.png" />
                    </Link>
                </div>
                <List data={this._page.data} />
                <div className="load-more">
                    <button onClick={this.getData}>加载更多</button>
                </div>
            </div>
        );
    }
});

class List extends React.Component {
    render() {
        let listData = this.props.data;

        return (
            <div>
                {
                    listData.map((data) => {
                        return (
                            <Link to={`/detail/${data.id}`} className="pro-link" key={Math.random()}>
                                <dl>
                                    <dt className="pro-img">
                                        <img src={data.image}/>
                                    </dt>
                                    <dd className="pro-name">
                                        {data.name}
                                    </dd>
                                    <dd className="pro-desc">{data.desc}</dd>
                                    <dd className="pro-price">{data.price}</dd>
                                </dl>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default Main;
