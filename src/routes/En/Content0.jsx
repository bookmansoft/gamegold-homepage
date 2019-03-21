import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner2 extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner2',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const follow = !isMobile ? {
      delay: 1000,
      minMove: 0.1,
      data: [
        { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
        { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
      ],
    } : null;
    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
    >
      <BgElement
        className="bg bg0"
        key="bg"
        id="bg$0"
        scrollParallax={{ y: 300 }}
      />
      <QueueAnim
        type={['bottom', 'top']} delay={200}
        className={`${props.className}-title`}
        key="text"
        id={`${props.id}-wrapperBlock0`}
      ><span
        className="logo"
        style={{ width: '70%', marginTop: '-50px' }}
        key="logo"
        id={`${props.id}-titleBlock0`}
      >Gamegold chain</span>
        <p
          key="content"
          id={`${props.id}-contentBlock0`}

        >
          As an advocate and builder of the value internet, Baiguwang launched the Golden Chain Platform of Game, directly attacking the pain points of the industry, enabling the animation and game industry, and building a passport economy with friends and businessmen.
        </p>
        <Button
          type="ghost"
          key="button"
          id={`${props.id}-buttonBlock0`}
        >
          <a href="http://www.gamegold.xin/app/gamegold.apk">  Product download
          </a>
        </Button>
      </QueueAnim>
    </Element>);

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

export default Banner2;

