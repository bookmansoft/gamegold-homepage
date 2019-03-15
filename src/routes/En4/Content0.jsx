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
                style={{marginTop:'-20px'}}
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
        tag: { tag: 'Company profile', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/lxwm1.png" />,
        text: `Fuzhou Baiguwang Network Technology Co., Ltd. (hereinafter referred to as Baiguwang Technology) was founded in 2018, is a start-up enterprise, registered capital of 10 million yuan.
        Baiguwang Technology's Game Golden Gold Chain is an open game ecological platform and virtual prop management solution tailored to the specific needs of the game industry with block chains as the underlying technology.
        Global game sales revenue in 2018 has exceeded $140 billion. Game virtual asset stock management is a huge market of over trillion RMB. Baiguwang Technology is the pioneer of game virtual asset management, and strives to become a leading manufacturer in this field within two years.`,
        // Since its establishment, the company advocates knowledge and respects talents, gathers a large number of elites in the industry. The core members are from the top management team of listed game companies. 
        // The company focuses on the bottom technology of the block chain. Our advantage is that first, we have a deep understanding of the game industry, and have mature solutions for the pain points of the game industry. Secondly, we have a bottom public chain structure developed independently. And it's tailored to the game industry.
      },
      {
        tag: { tag: 'Contact us', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="http://www.gamegold.xin/imgs/zichan_en.jpg" />,
        text: `<h3>Company Address: 23rd Floor, Libao Tianma Square, No. 1 Wuyi North Road, Gulou District, Fuzhou City</h3><h3>Telephone：0591-87553093</h3><h3>Email：2257032171@qq.com</h3><h3>WeChat Subscription：</h3><img class="weixin" src="http://www.gamegold.xin/imgs/weixin.png">`,
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
            <span style={{marginTop:'-50px'}}>Gamegold Chain</span>
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            Digital Asset Steward
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
            style={{marginTop:'-20px',marginBottom:'-20px'}}
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
