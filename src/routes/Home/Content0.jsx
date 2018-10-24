import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: false
    };
  }

  render() {
    if(this.state.btn) {
      window.location.href = 'http://baidu.com';
    }
    const props = { ...this.props };
    delete props.isMobile;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            一个高效的页面动画解决方案
          </p>
          <Button type="ghost" key="button" id={`${props.id}-button`}  onClick={()=>{
            this.setState({btn: true});
          }}>
            Learn More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
