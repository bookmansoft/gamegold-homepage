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
      { img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '道具上鏈與投放', content: '企業可在後臺管理系統中操作道具的生成、投放、贈送、發佈售賣等，利用道具的流轉獲取更多的客源。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '資料統計與分析', content: '在後臺管理系統中能輕鬆篩查運營數據，便於企業對生態中的用戶進行精准行銷，節約行銷成本，提高效率。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '用戶管理', content: '查看用戶使用產品情况，便於製定更合理的行銷方案' },
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
              企業管理後臺
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              合作企業管理業務的强大幫手
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
