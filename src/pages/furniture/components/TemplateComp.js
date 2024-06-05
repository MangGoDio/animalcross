import { useState } from 'react';
import classnames from 'classnames';
import NbTips from '@/components/NbTips';
import { Row, Col } from 'antd';
import _STATUS from '@/pages/utils/status';
import { getMarkInfo, setMarkInfo } from '@/pages/utils/utils';
import styles from './TemplateComp.less';

export default function(props) {
  let { search, active, isHideMark, config, name } = props;

  const initListToMap = mark_list => {
    if (isHideMark && mark_list.length > 0) {
      config = config.filter(i => !mark_list.includes(i.id));
    }

    if (active) {
      config = config.filter(i => i.type === active);
    }

    if (search && search.name) {
      config = config.filter(i => i.name.search(search.name) !== -1);
    }

    return config;
  };

  const [mark_list, setMarkList] = useState(
      (getMarkInfo('mango_furniture') && getMarkInfo('mango_furniture')[name]) || [],
    ), // 标记列表
    list = initListToMap(mark_list);

  // 储存/取消标记的物种
  const saveMarkInfo = id => {
    let arr = [];
    if (mark_list.includes(id)) {
      arr = mark_list.filter(i => i !== id);
    } else {
      arr = [...mark_list, id];
    }
    setMarkList(arr);

    let furn_data = getMarkInfo('mango_furniture') || {};
    furn_data[name] = arr;
    setMarkInfo(furn_data, 'mango_furniture');
  };

  return (
    <div>
      {list.length > 0 ? (
        <div className={styles.card_list}>
          {list.map(i => (
            <ImgCard
              key={i.id}
              name={name}
              info={i}
              mark_list={mark_list}
              onClick={() => saveMarkInfo(i.id)}
            />
          ))}
        </div>
      ) : (
        <div>{JSON.stringify(search) === '{}' && !active && <NbTips />}</div>
      )}
    </div>
  );
}

// 图鉴卡片
const ImgCard = props => {
  const { info, onClick, mark_list, name } = props;
  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.isMark]: mark_list.includes(info.id),
      })}
      onClick={onClick}
    >
      <img className={styles.disc_img} src={info.img} alt="图标" />
      <div className={styles.title}>{info.name}</div>
      <Row justify="center" style={{ fontSize: 12, padding: '0 5px' }}>
        <Col>{_STATUS['FUN_TYPE'][name][info.type]}</Col>
        {/* <Col>￥{info.price}</Col> */}
      </Row>
    </div>
  );
};
