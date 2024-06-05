import { useState } from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import { requireImg } from '@/pages/utils/utils';
import flower_config from '@/pages/utils/flower_config';
import styles from './index.less';

export default function() {
  const [active, setActive] = useState(''), // 搜索条件
    config = [
      { value: '', label: '全部' },
      { value: 'rose', label: '玫瑰' },
      { value: 'tulip', label: '郁金香' },
      { value: 'mum', label: '菊花' },
      { value: 'cosmo', label: '波斯菊' },
      { value: 'lily', label: '百合' },
      { value: 'pansy', label: '三色堇' },
      { value: 'hyacinth', label: '风信子' },
      { value: 'wind', label: '银莲花' },
    ];

  const initConfig = () => {
    if (active) {
      return config.filter(i => i.value === active);
    } else {
      return config;
    }
  };

  return (
    <div style={{ padding: 8 }}>
      <div>
        注：参考近期杂交精华贴以及群里杂交大师总结出的懒人杂交攻略，优先保证纯种，需要多周目杂交出的颜色均推荐使用珍花岛的基因，既能保证纯种又简单省事，建议多与其他岛主交换获取
      </div>
      <Row gutter={24} style={{ margin: '12px 0 0 0' }}>
        {config.map(i => (
          <Col
            className={classnames({
              [styles.tab]: true,
              [styles.active]: i.value === active,
            })}
            key={i.value}
            onClick={() => setActive(i.value)}
          >
            {i.label}
          </Col>
        ))}
      </Row>
      <Row style={{ marginLeft: -12 }}>
        {initConfig().map(k => (
          <Row key={k.value}>
            {flower_config[k.value] &&
              flower_config[k.value].map((i, index) => (
                <Row key={index} align="middle" className={styles.card_content}>
                  <div>
                    {i.father.map((j, ind) => (
                      <div key={ind}>
                        {ind > 0 && (
                          <img
                            className={styles.plus}
                            src={requireImg('', `plus.png`)}
                            alt="图标"
                          />
                        )}
                        <FatherCard {...j} active={k.value} />
                      </div>
                    ))}
                  </div>
                  <img className={styles.arrow} src={requireImg('', `arrow.png`)} alt="图标" />
                  <div>
                    {i.childs.map((j, ind) => (
                      <div key={ind}>
                        {ind > 0 && <div style={{ height: 21 }}></div>}
                        <ChildCard key={ind} {...j} active={k.value} />
                      </div>
                    ))}
                  </div>
                </Row>
              ))}
          </Row>
        ))}
      </Row>
    </div>
  );
}

const FatherCard = props => {
  const { active, color, gene, type } = props;
  return (
    <Row className={styles.flower_card}>
      <img src={requireImg(`flower/${active}/`, `${color}.png`)} alt="图标" />
      <div>
        <div>{gene}</div>
        <div>{type}</div>
      </div>
    </Row>
  );
};

const ChildCard = props => {
  const { active, color, gene, percent } = props;
  return (
    <Row className={styles.flower_card}>
      <img src={requireImg(`flower/${active}/`, `${color}.png`)} alt="图标" />
      <div>
        <div>{gene}</div>
        <div>{percent}%</div>
      </div>
    </Row>
  );
};
