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
        text: `福州百谷王网络科技有限公司（以下简称百谷王科技或公司）成立于2018年，是一家初创企业，注册资金1000万元人民币。
        <h3></h3>公司成立以来崇尚知识、尊重人才，汇聚了大量业内精英，核心成员均来自上市公司高管团队，公司专注于区块链底层技术研发，拥有自主知识产权的区块链引擎及相关工具链产品。`,
      },
      {
        tag: { tag: '联系我们', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm2.jpg" />,
        text: `<h3>公司地址：福州市鼓楼区软件园F区七号楼十五层</h3><h3>电话：0591-87553093</h3><h3>邮箱：2257032171@qq.com</h3><h3>公众号：</h3><img className="weixin" src="http://www.gamegold.xin/imgs/weixin.png">`,
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
            游戏金链
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
