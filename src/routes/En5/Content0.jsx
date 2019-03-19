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
      { icon: 'http://www.gamegold.xin/imgs/game1_en.png', title: '數位資產管理', content: '為用戶提供道具上鏈、數位資產去中心化交易等功能' },
      { icon: 'http://www.gamegold.xin/imgs/game2_en.png', title: '遊戲眾籌', content: '為廠商提供急需的啟動資金，讓用戶分享創造力經濟' },
      { icon: 'http://www.gamegold.xin/imgs/game3_en.png', title: '網路遊戲', content: '數以千計的遊戲開發商，合力打造千姿百態的二次元世界' },
      { icon: 'http://www.gamegold.xin/imgs/game4_en.png', title: '商家積分系統', content: '為廣大的商戶提供一個通存通兌的積分平臺' },
      { icon: 'http://www.gamegold.xin/imgs/game5_en.png', title: '閒置物品流轉', content: '構建一個去中心化的價值轉移網絡，閒置物品真正利用起來，節約社會資源' },
      { icon: 'http://www.gamegold.xin/imgs/game6_en.png', title: '其他應用', content: '我們提供基於區塊鏈科技的一站式服務，更多應用場景，等你一起來開發' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100, };
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
          <img src={item.icon} width="500%" />
        </TweenOne>
        {/* <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div> */}
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
      <div>
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
          <br />
          CryptoDragon
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            <div >
            <table>
              <tr>
                <td width="10%"></td>
                <td width="80%">
                <span style={{textAlign:'left',display:'block'}}>
<br />                "CryptoDragons is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoDragons! Each dragon is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed." 
<br />
<br />A、Log in to register
<br />1、Registration fee 0: registration is free of charge
<br />2、Enter email and password to register the game account.
<br />
<br />B、Access to fight the dragon
<br />1、Creation battle dragon
<br />There are 111 0-generation creation war dragons in the server, among which #0~#10 are officially reserved and #11~#100 war dragons are officially purchased at the appointed time. Thirty of the trands dragons will receive benefits through the nuggets pool and arena pool.
<br />A creation dragon will be generated for every 2000 times of the total number of battle dragons in the whole system. The full service bidding will be carried out according to the server service opening plan, and 50% of the proceeds from the auction will be evenly distributed into the nuggets pool and arena prize pool for 7 days. It needs to double the growth number of war dragons for every 10 generation. For example, it needs to reach the multiple of 4000 for the 11th generation, and the multiple of 8000 for the 21st generation.
<br />
<br />2、New users hatch dragon eggs
<br />Each new user will receive a dragon egg upon successful registration. The egg algebra and price will be determined according to the daily market conditions. The user pays corresponding account balance to be able to hatch into battle dragon.
<br />
<br />3、Market to buy
<br />Players can buy war dragons sold by other players through [market] - [transaction] in the system. Each war dragon will have a different price. Click [buy] to directly use the balance of the game account to purchase.
<br />
<br />4、Family income
<br />Players can choose suitable zhanlong to buy their reproductive rights in [market] - [fertility], which requires the balance of the account to be spent. Click [fertility], select the zhanlong to have fertility in the pop-up list, and click [ok] to obtain a new zhanlong.
<br />
<br />C、Noun explanation
<br />1、Generation
<br />	Generation is natural 0~N
<br />
<br />2、Generation of coefficient
<br />Generation coefficient is the largest top-level attribute in the system. Generation coefficient increases with the increase of algebra, and each generation will have certain profit and loss. 
<br />Algorithm is: the coefficient of generation x = (1 + algebra/(A + generation coefficient parameter algebraic)) ^ generation coefficient parameter B * algebra.
<br />	The coefficient of substitution 0 is equal to 1
<br />	Parameter of substitution coefficient A: 100
<br />	Parameter B of substitution coefficient: 1.2
<br />
<br />3、Weight
<br />Weight is an important indicator for zhanlong to participate in the daily profit distribution of nuggets. The initial value of weight is 0, and the increase can only be achieved through feeding.
<br />
<br />4、Growth value
<br />Growth is one of the core parameters of how much weight will be produced by feeding the token every time. If the growth value is 1.5, feeding 1 token can increase the weight by 1.5. The growth value can only be improved by random feeding.
<br />
<br />5、Family values
<br />Fertility is an important attribute related to the reproductive cooling market of zhanlong. The higher the fertility value is, the lower the cooling time will be. The improvement of fertility value can only be generated by the randomness of feeding.
<br />
<br />6、The nuggets value
<br />Nuggets are an important attribute related to the fighting dragon nuggets' ability. The higher the nuggets' value is, the higher the daily income will be. The increase of nuggets' value can only be generated by the randomness of feeding.
<br />
<br />7、Attack value
<br />Attack is an important attribute related to the combat ability of dragons. The higher the attack, the higher the expectation of winning the battle. The increase in attack value can only be achieved by random feeding.
<br />
<br />8、Fertility cooling
<br />Description of reproductive cooling: each dragon generates corresponding reproductive cooling time according to the reproductive value, algebra and generation coefficient. When the reciprocal of cooling is 0 (ready), it means that the dragon can carry out the next generation of reproductive.
<br />
<br />9、Reproductive number
<br />Number of births of zhanlong, initial 0; Each successful birth, the number of +1.
<br />
<br />D、Feeding system:
<br />The initial weight of all battle dragons is 0KG, and players can increase the weight value by feeding. Each feeding will be given corresponding attribute growth according to the salt-added hash generated by the system during feeding.
<br />
<br />E、Skin system
<br />The appearance of zhanlong is influenced by many appearance genes. The offspring will inherit the appearance genes of both parents, and there is a small probability of genetic mutation, resulting in special appearance variation.
<br />
<br />         <a href="com.chinacit.btc_dragon.apk" target="_blank" style={{color:'blue',fontSize:'18px'}}>click here to download</a>
</span>
                </td>
                <td width="10%"></td>
              </tr>
            </table>

          </div>
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
      </div>
    );
  }
}


export default Content;
