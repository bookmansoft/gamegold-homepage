import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '数字资产管家', content: '为用户提供道具上链、数字资产去中心化交易等功能' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '网络游戏', content: '数以千计的游戏开发商，合力打造千姿百态的二次元世界' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '商家积分系统', content: '为广大的商户提供一个通存通兑的积分平台' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '闲置物品流转', content: '构建一个去中心化的价值转移网络，闲置物品真正利用起来，节约社会资源' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '其他应用', content: '我们为各类应用厂商提供底层区块链技术支持服务' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             游戏金链行业应用
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            基于区块链的强大生态网络
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
