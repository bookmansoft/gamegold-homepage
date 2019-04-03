import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <span>
        <img src={item.img} width="100%" />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    const dataSource = [
      
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMobile;
    const queue = isMobile ? 'bottom' : 'left';
    const imgAnim = isMobile ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              空间介绍
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              Vallnet孵化器拥有总建筑面积600平方米，总工位30个。具备设施有：办公区、会议室、休闲区、路演区、展示区、活动室。
            </p>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyle
          >
            <img width="100%" src="http://www.gamegold.xin/imgs/zc2.jpg" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
