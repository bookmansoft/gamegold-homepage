import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'content6',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag;
    const img = item.img;
    const text = item.text;
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i><img src={tag.icon} width="100%" /></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const childrenData = [
      {
        tag: { tag: '公司简介', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm1.png" />,
        text: `福州百谷王网络科技有限公司（以下简称百谷王科技）成立于2018年，是一家初创企业，注册资金1000万元人民币。
        <h3></h3>
公司成立以来崇尚知识、尊重人才，汇聚了大量业内精英，核心成员均来自上市游戏公司高管团队，公司专注于区块链底层技术，我们的优势是，首先对游戏行业有很深刻的理解，并且针对游戏行业痛点有着成熟的解决方案，其次我们拥有自主研发的底层公链结构，并且是针对游戏行业量身定做的。
百谷王科技旗下的游戏金公链是以区块链为底层技术、深度结合游戏行业特定需求而量身定制的开放式游戏生态平台和虚拟道具管理解决方案。
2018年全球游戏销售收入已突破1400亿美金，游戏虚拟资产存量管理是一个超万亿人民币的巨大市场，百谷王科技是游戏虚拟资产管理的先行者，并力争在两年内成为该领域的领导厂商。`,
      },
      {
        tag: { tag: '联系我们', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm2.jpg" />,
        text: `<h3>公司地址：福州市鼓楼区五一北路1号力宝天马广场23楼</h3><h3>电话：0591-87553093</h3><h3>邮箱：2257032171@qq.com</h3><h3>公众号：</h3><img class="weixin" src="http://www.gamegold.xin/imgs/weixin.png">`,
      }
    ];
    const tabsChildren = childrenData.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            Gamegold游戏金链
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            数字资产管家
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
