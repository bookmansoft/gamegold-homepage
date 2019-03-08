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
      { img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: 'Projects Uplink and Delivery', content: 'Enterprises can operate props generation, delivery, gift, release and sale in the background management system, and use the circulation of props to obtain more customers.' },
      { img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: 'Data statistics and analysis', content: 'In the background management system, the operation data can be easily screened, so that enterprises can carry out accurate marketing to users in the ecosystem, save marketing costs and improve efficiency.' },
      { img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: 'user management', content: 'View the user's use of the product to facilitate the formulation of a more reasonable marketing plan' },
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
              Business Management Background
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              A Strong Helper for Cooperative Enterprise Management Business
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
            <img width="100%" src="http://www.gamegold.xin/imgs/cpjs2.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
