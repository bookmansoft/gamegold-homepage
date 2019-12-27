import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

import ScrollAnim from 'rc-scroll-anim';
const Link = ScrollAnim.Link;
const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen
    });
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    // const navData = { menu1: '首页', menu2: '产品', menu3: '行业应用', menu4: '关于我们' };;
    const navData = [{ menu: '首页',url:'/'}, {menu: '产品介绍',url:'/#/Home2'}, {menu: '行业应用',url:'/#/Home3'}, {menu: '关于我们',url:'/#/Home4'} ];
    const navChildren = Object.keys(navData).map((key, i) => {
      // let path =  `content_${i}_0`;
      return (<Item key={i}><a href={navData[key].url}>{navData[key].menu}</a></Item>);
    });    
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" class="logo" src="http://www.gamegold.xin/imgs/Logo_name02.png" />
      </TweenOne>
      {isMobile ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['2']}
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['2']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
