import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const logoContent = { img: 'http://www.gamegold.xin/imgs/Logo_name02.png', content: '福州百谷王网络科技有限公司' };
    const dataSource = [
      { title: '产品', content: '产品介绍\n\n', contentLink: '/#/Home2' },
      { title: '关于', content: '联系我们', contentLink: '/#/Home4' },     
      { title: '关注', content: 'https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg', contentLink: 'https://github.com/bookmansoft' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMobile ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo">
            <img src={logoContent.img} width="100%" />
          </p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2018 The Project by <a href="http://www.gamegold.xin/">Gamegold</a>. All Rights Reserved<br />
          闽B2-20190516 闽网文（2019）0058-002号 闽ICP备 18022181 号
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
