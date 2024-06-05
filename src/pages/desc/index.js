import { requireImg } from '@/pages/utils/utils';

import styles from './index.less';

export default function() {
  return (
    <div style={{ padding: 8 }}>
      <div className={styles.container}>
        <DescCard title="数据来源">
          <a
            style={{ margin: '0 6px' }}
            href="https://nookplaza.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            资料站
          </a>
        </DescCard>
        <DescCard title="快到期提示">
          暂定是过期前一个月展示快到期图标，如果反馈的多的话考虑改成过期前一周展示提示（同理即将上线也是提前一个月的时间）
        </DescCard>
        <DescCard title="数据存储">
          标记数据/筛选开关是保存在浏览器(localStorage)上的，只要不清除cookie类别的缓存就会一直存在，当然用不同的浏览器打开的数据自然是独立的
        </DescCard>
        <DescCard title="鱼类钓点">
          <div className={styles.fish_place}>
            <div>
              <img src={requireImg(`fish_help/`, `cliff.jpg`)} alt="高地水域" />
              <img src={requireImg(`fish_help/`, `mouth.jpg`)} alt="河口" />
              <img src={requireImg(`fish_help/`, `pond.jpg`)} alt="池塘" />
            </div>
            <div>
              <img src={requireImg(`fish_help/`, `river.jpg`)} alt="河流" />
              <img src={requireImg(`fish_help/`, `sea.jpg`)} alt="大海" />
              <img src={requireImg(`fish_help/`, `terminal.jpg`)} alt="码头" />
            </div>
          </div>
        </DescCard>
        <DescCard title="意见反馈">
          发现有数据问题或者使用反馈请前往NGA
          <a
            href="https://bbs.nga.cn/read.php?tid=20966876"
            target="_blank"
            rel="noopener noreferrer"
          >
            唯一指定帖子
          </a>
          回复，感谢配合！
        </DescCard>
      </div>
    </div>
  );
}
// 标题信息
export const DescCard = props => (
  <div className={styles.desc_card}>
    <div className={styles.title}>
      <img src={requireImg(``, `tips.png`)} alt="高地水域" />
      {props.title}
    </div>
    <div className={styles.content}>{props.children}</div>
  </div>
);
