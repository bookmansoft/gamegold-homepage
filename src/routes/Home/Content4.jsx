import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const dataSource = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png', title: '一站式业务接入', content: '支付、结算、核算接入产品效率翻四倍' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png', title: '一站式事中风险监控', content: '在所有需求配置环节事前风险控制和质量控制能力' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png', title: '一站式数据运营', content: '沉淀产品接入效率和运营小二工作效率数据' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
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
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            产品与服务
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
