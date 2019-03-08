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
        tag: { tag: '公司簡介', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm1.png" />,
        text: `福州百穀王網絡科技有限公司（以下簡稱百穀王科技）成立於2018年，是一家初創企業，註冊資金1000萬元人民幣。
        <h3></h3>
        公司成立以來崇尚知識、尊重人才，彙聚了大量業內精英，核心成員均來自上市遊戲公司高管團隊，公司專注於區塊鏈底層科技，我們的優勢是，首先對遊戲行業有很深刻的理解，並且針對遊戲行業痛點有著成熟的解決方案，其次我們擁有自主研發的底層公鏈結構，並且是針對遊戲行業量身定做的。
        百穀王科技旗下的遊戲金公鏈是以區塊鏈為底層科技、深度結合遊戲行業特定需求而量身定制的開放式遊戲生態平臺和虛擬道具管理解決方案。
2018年全球遊戲銷售收入已突破1400億美金，遊戲虛擬資產存量管理是一個超萬億人民幣的巨大市場，百穀王科技是遊戲虛擬資產管理的先行者，並力爭在兩年內成為該領域的領導廠商。`,
      },
      {
        tag: { tag: '聯繫我們', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm2.jpg" />,
        text: `<h3>公司地址：福州市鼓樓區五一北路1號力寶天馬廣場23樓</h3><h3>電話：0591-87553093</h3><h3>郵箱：2257032171@qq.com</h3><h3>公眾號：</h3><img class="weixin" src="http://www.gamegold.xin/imgs/weixin.png">`,
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
            Gamegold遊戲金鏈
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            數位資產管家
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
