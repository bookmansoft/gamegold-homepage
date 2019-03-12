import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';


import Nav from './Nav';
import Content0 from './Content0';
import Footer from './Footer';

import './less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    } 
    
  }

  componentWillReceiveProps(nextProps){
    //当路由切换时
    if(this.props.location !== nextProps.location){
        window.scrollTo(0,0);
    }
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>,
      <Content0 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
