import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyle
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="http://www.gamegold.xin/imgs/shouye3.jpg" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              更多区块链应用解决方案
            </h1>
            <p key="p" id={`${props.id}-content`}>
              为传统行业提供一站式区块链应用解决方案，通过区块链技术为传统产业赋能，带动游戏、动漫、图书、人力资源等产业结构优化，助力区域经济转型、产业升级。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
