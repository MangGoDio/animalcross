import Link from 'umi/link';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import { requireImg } from '@/pages/utils/utils';

import styles from './index.less';

const url_config = [
  { title: '鱼类图鉴', icon: 'fish_icon.jpg', url: '/fish' },
  { title: '昆虫图鉴', icon: 'insect_icon.jpg', url: '/insect' },
  { title: '海产图鉴', icon: 'seafood_icon.jpg', url: '/seafood' },
  { title: '化石图鉴', icon: 'fossil_icon.jpg', url: '/fossil' },
  { title: '美术图鉴', icon: 'artwork_icon.jpg', url: '/artwork' },
  { title: '家具图鉴', icon: 'furniture_icon.jpg', url: '/furniture' },
  { title: '雨伞图鉴', icon: 'umbrellas_icon.jpg', url: '/umbrellas' },
  { title: '反应收集', icon: 'face_icon.jpg', url: '/face' },
  { title: '唱片图鉴', icon: 'disc_icon.jpg', url: '/disc' },
  // { title: 'DIY图鉴', icon: 'diy_icon.jpg', url: '/diy' },
  // { title: '服饰图鉴', icon: 'clothing_icon.jpg', url: '/clothing' },
  { title: '花卉杂交', icon: 'flower_icon.jpg', url: '/flower' },
  { title: '导入导出', icon: 'data_icon.jpg', url: '/data' },
  { title: '相关备注', icon: 'help_icon.jpg', url: '/desc' },
];

export default function() {
  return (
    <div className={styles.phone}>
      <Row>
        {url_config.map((i, index) => (
          <Col span={8} key={index}>
            <Link to={i.url}>
              <img src={requireImg('', i.icon)} alt="图标" />
              <p>{i.title}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export const NavHeader = props => (
  <div className={styles.nav_container}>
    {url_config.map(i => (
      <Link
        key={i.url}
        className={classnames({
          [styles.nav_item]: true,
          [styles.active]: i.url === props.current,
        })}
        to={i.url}
      >
        <img src={requireImg('', i.icon)} alt="图标" />
        <span>{i.title}</span>
      </Link>
    ))}
  </div>
);
