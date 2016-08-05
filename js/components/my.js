import React from 'react';

class My extends React.Component {
    render() {
        return(<div className="my-con">
            <ul className="general-oper">
                <li className="mypublish">
                    <a href="http://my.58.com/m" onclick="clickLog('from=m_my_myfabu')">
                        <span className="icon"></span>
                        <span className="txt">我的发布</span>
                    </a>
                </li>
                <li className="mystore">
                    <a href="http://m.58.com/localfavorite/" onclick="clickLog('from=m_my_shoucang')">
                        <span className="icon"></span>
                        <span className="txt">我的收藏</span>
                    </a>
                </li>
                <li className="mymessage">
                    <a href="http://huangye.api.58.com/zsjm/m/liuyanlistall?from=bidlist" onclick="clickLog('from=m_my_mygoutong')">
                        <span className="icon log-tip"></span>
                        <span className="txt">商机管理</span>
                    </a>
                </li>
                <li className="hrecord">
                    <a href="http://m.m.58.com/history/" onclick="clickLog('from=m_my_liulanjilu')">
                        <span className="icon"></span>
                        <span className="txt">历史记录</span>
                    </a>
                </li>
            </ul>

            <ul className="special-oper">
                <li>
                    <a href="http://jianli.m.58.com/m_jobmgr" onclick="clickLog('from=m_my_myqiuzhi')">
                        <i></i>
                        <span>我的求职</span>
                    </a>
                </li>
                <li>
                    <a href="http://qy.m.58.com/m_entmgr/?58hm=my58&amp;58cid=1&amp;PGTID=0d3001df-0030-4f6a-8a7e-9a1fa89216c6&amp;ClickID=1" onclick="clickLog('from=m_my_myzhaopin')">
                        <i></i>
                        <span>我的招聘</span>
                    </a>
                </li>
                <li>
                    <a href="http://vdian.vip.58.com/user/info/27401616980231/0?from=m_usercenter" onclick="clickLog('from=m_my_weidian')">
                        <i></i>
                        <span>我的微店</span>
                    </a>
                </li>
                <li>
                    <a href="http://order.58.com/ordermanage/morder" onclick="clickLog('from=m_my_yuyue')">
                        <i></i>
                        <span>我的预约</span>
                    </a>
                </li>
                <li>
                    <a href="//paycenter.58.com/wapaccount?58hm=my58&amp;58cid=1&amp;PGTID=0d3001df-0030-4f6a-8a7e-9a1fa89216c6&amp;ClickID=1&amp;payfrom=1&amp;platfrom=mobile" onclick="clickLog('from=m_my_mymoney')">
                        <i></i>
                        <span>我的资金</span>
                    </a>
                </li>

                <li>
                    <a href="/feedback?58hm=my58&amp;58cid=1&amp;PGTID=0d3001df-0030-4f6a-8a7e-9a1fa89216c6&amp;ClickID=1" onclick="clickLog('from=m_my_yijianfankui')">
                        <i></i>
                        <span>意见反馈</span>
                    </a>
                </li>

            </ul>
        </div>);
    }
}

export default My;
