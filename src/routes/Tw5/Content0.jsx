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
      { icon: 'http://www.gamegold.xin/imgs/game1_tw.png', title: '數位資產管理', content: '為用戶提供道具上鏈、數位資產去中心化交易等功能' },
      { icon: 'http://www.gamegold.xin/imgs/game2_tw.png', title: '遊戲眾籌', content: '為廠商提供急需的啟動資金，讓用戶分享創造力經濟' },
      { icon: 'http://www.gamegold.xin/imgs/game7_tw.png', title: '網路遊戲', content: '數以千計的遊戲開發商，合力打造千姿百態的二次元世界' },
      { icon: 'http://www.gamegold.xin/imgs/game4_tw.png', title: '商家積分系統', content: '為廣大的商戶提供一個通存通兌的積分平臺' },
      { icon: 'http://www.gamegold.xin/imgs/game5_tw.png', title: '閒置物品流轉', content: '構建一個去中心化的價值轉移網絡，閒置物品真正利用起來，節約社會資源' },
      { icon: 'http://www.gamegold.xin/imgs/game6_tw.png', title: '其他應用', content: '我們提供基於區塊鏈科技的一站式服務，更多應用場景，等你一起來開發' },
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
          <br /><br />
            區塊戰龍
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
                區塊戰龍是一款圍繞著可生育、可培養、可收藏、可戰鬥而設計的数位寵物遊戲！每只戰龍都有獨一無二的外觀，外觀通過基因繼承和遺傳。餵養戰龍可新增各項能力，更强的能力使之在對抗中贏得的優勢。
<br />               
<br />               A、登錄註冊
<br />               1、注册0費用：無需花費即可注册
<br />               2、輸入郵箱和密碼注册遊戲帳號。
<br />               
<br />               B、獲取戰龍
<br />               1、創世戰龍
<br />               服務器共111只0代創世戰龍，其中#0~#10由官方保留，#11~#100號戰龍在官方指定的時間開始搶購。其中30只創世戰龍的收益將作為福利，通過掘金池和競技場獎池進行回饋。
<br />               整個系統戰龍總數每達到2000的倍數，將會生成一隻創世戰龍，將會按照服務器開服計畫進行全服競拍，拍賣所得的50%收益平均分7天進入掘金池和競技場獎池。每生成10次所需戰龍增長數量加倍，如第11次生成時就需要達到4000倍數、21次是需要8000倍數。
<br />               
<br />               2、新用戶孵化龍蛋
<br />               每個新用戶註冊成功後會獲得一個龍蛋，龍蛋代數和價格根據每日市場行情確定。用戶支付相應帳戶餘額即可孵化成戰龍。
<br />               
<br />               3、集市購買
<br />               玩家通過系統中的【集市】-【交易】即可購買其他玩家出售的戰龍，每一隻戰龍會有不同的價格，點擊【購買】即可直接使用遊戲帳戶餘額進行購買。
<br />               
<br />               4、生育所得
<br />               玩家可以在【集市】-【生育】中選擇適合自己的戰龍購買其生育權，這是需要花費帳戶餘額的，點擊【生育】，在彈出的清單中選擇自己需要進行生育的戰龍，點擊【確定】，即可獲得一個新的戰龍。
<br />               
<br />               C、名詞解釋
<br />               1、代數
<br />               代數為自然0~N
<br />               2、代係數
<br />               代係數是系統中最大的一個頂級内容，代係數隨著代數增大而新增，每一代都會一定的損益。
<br />               算灋為：x代係數=（1+代數/（代係數參數A+代數））*代數^代係數參數B。
<br />               0代係數=1
<br />               代係數參數A:100
<br />               代係數參數B:1.2
<br />               
<br />               3、體重
<br />               體重是戰龍參與每日掘金收益分配的一個重要名額，體重的初始值都為0，新增只能通過餵食產生，交易、生育等都不會對體重產生影響。
<br />               
<br />               4、成長值
<br />               成長是戰龍每次餵食代幣產生多少體重的覈心參數之一，若成長值為1.5，餵養1代幣就能新增1.5的體重，成長值的提升只能通過餵食的隨機性產生。
<br />               
<br />               5、生育值
<br />               生育是關係到戰龍生育冷卻市場的一個重要内容，生育值越高，冷卻時間越低，生育值的提升只能通過餵食的隨機性產生。
<br />               
<br />               6、掘金值
<br />               掘金是關係到戰龍掘金能力的一個重要内容，掘金值越高，每日獲取的收益就越高，掘金值的提升只能通過餵食的隨機性產生。
<br />              
<br />              7、攻擊值
<br />           攻擊是關係到戰龍戰鬥能力的一個重要内容，攻擊越高，贏得戰鬥期望就越高。攻擊值的提升只能通過餵食的隨機性產生。
<br />           
<br />            8、生育冷卻
<br />            生育冷卻說明：每只戰龍根據生育值、代數、代係數生成對應生育冷卻時間，當冷卻倒數為0（準備就緒）的時候即表示戰龍可以進行下一代的生育了。
<br />           
<br />            9、生育次數
<br />            戰龍已生育次數，初始0；每次成功生育，次數+1。
<br />           
<br />           D、餵養系統：
<br />           所有戰龍的初始體重都是0KG，玩家可以通過投食的管道新增體重值，每次投食都會根據投食時系統產生的加鹽hash給予相應的内容成長。
<br />           
<br />          E、皮膚系統
<br />         戰龍外觀由多個外觀基因共同影響生成。子代會繼承雙親的外觀基因，也有小概率發生基因突變，生成特殊變異外觀。
<br />
<br />         <a href="com.chinacit.btc_dragon.apk" style={{color:'blue',fontSize:'18px'}}>點擊此處下載 APP</a>
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
