import React from 'react';

let Letter = React.createClass({
    getDefaultProps() {
        console.group();
        console.log('function getDefaultProps called in class Letter...');
        return {
            myName: 'Wumingli',
            sex: 'male',
            show: true,
        };
    },
    getInitialState() {
        console.log('function getInitalState is called...');
        //此方法中已经可以读取到this.props
        console.log(this.props);
        return null;
    },
    componentWillMount() {
        console.log('function componentWillMount is called...');
    },
    _changeName() {
        this.setState({
            myName: 'wumingli-changed',
            show: false,
        });
    },
    render() {
        console.log('function render is called in class Letter...');
        console.log(this.state);
        return (
            <div className="letter-content load-more">
                <h3>亲爱的二手真用户们：</h3>
                <p>今天二手频道迎来上线至今最大改变 —— 58二手将整体品牌升级到“转转”。</p>
                <p>58二手是中国最早最大的二手社区。我们只搭建了最简单的规则，买家和卖家在这里完成发布和浏览，去线下电话和交易。早年的发展非常迅速，是用户创造了这一切，大家互相吸引互相交易，让闲置旧物焕发新生。</p>
                <p>但很多问题也在近年出现。“用户多”带来了“效果”，而“效果”带来了一些“坏人”。虽然用户数仍不断增长，但真用户的体验却越来越差。有用户向我们投诉他们遇到了骗子，我们近期打击的一个北京骗子用3个真实手机号和84个运营商小号发布了三千多条虚假手机信息。这个社区变得不再纯洁和充满乐趣。有一段时间，我们自己甚至也不喜欢我们的产品了。自己都不喜欢，又怎么敢让大家用呢？</p>
                <p>我们可以闷头把投诉和体验差归结为中国诚信环境不健全，也可以尝试改变这一切。我们选择改变，选择行动！</p>
                <p>1.  我们选择激进的方式将体验和品牌全面升级。</p>
                <p className="indent">1)  对于一个繁荣的社区，规则的简单恰恰是用户的复杂。为了真正的简单，我们不得不提高门槛。</p>
                <p className="indent">2)  “转转”将要求微信绑定、隐藏电话、担保交易。</p>
                <p>2.  针对于所有二手平台最头疼的二手手机：</p>
                <p className="indent">1)  我们放弃插在58个人信息里的商家广告收入，直到我们确认有信心完全掌控质量。</p>
                <p className="indent">2)  我们投入成本强化转转优品自营和验机服务，这将是全网唯一能放心买到靠谱二手手机的地方。优品自营的二手iPhone也将首次支持30天质保，买二手可以像买新的一样，这是我们背后几百名质检师的共同承诺。</p>
                <p>在经过半年的测试后，我们确信“转转”将提供比过去更好的服务体验，这会是一个值得我们一起重新建设的平台。我们知道改变带来不习惯，但我们同样知道不改变一定不行。</p>
                <p>二手交易是一件利己、利他、利环境的好事，在闲置旧物重新找到价值的同时也会减少浪费和污染。</p>
                <p>衷心希望和各位真用户一起，再次重新开荒，创造一个新世界！</p>
                <button onClick={this._changeName}>改变state</button>
            </div>
        );
    },
    componentDidMount() {
        console.log('function componentDidMount is called');
        console.groupEnd();
    },
    componentWillUnmount() {
        console.log('function componentWillUnmount is called');
    },
    componentWillAppear() {
        console.log('function componentWillAppear is called');
    },

    //存在期
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
});

export default Letter;
