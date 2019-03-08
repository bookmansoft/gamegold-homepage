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
              開放的區塊鏈應用解決方案賦能傳統行業
              </h1>
            <p key="p" id={`${props.id}-content`}>
              百穀王為傳統行業提供一站式區塊鏈應用解決方案，通過區塊鏈科技為傳統產業賦能，帶動遊戲、動漫、圖書、人力資源等產業結構優化，助力區域經濟轉型、產業升級。
             </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
