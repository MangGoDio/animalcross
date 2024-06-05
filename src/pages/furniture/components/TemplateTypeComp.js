import { useState } from 'react';
import classnames from 'classnames';
import NbTips from '@/components/NbTips';
import { Row, Col } from 'antd';
import _STATUS from '@/pages/utils/status';
import { getMarkInfo, setMarkInfo } from '@/pages/utils/utils';
import styles from './TemplateTypeComp.less';

export default function(props) {
  let { search, active, isHideMark, config, name } = props;

  const initListToMap = mark_list => {
    if (isHideMark && mark_list.length > 0) {
      config = config.filter(i => {
        let num = 0;
        for (let j of i.types) {
          if (mark_list.includes(j.id)) num++;
        }
        return !(num > 0 && num === i.types.length);
      });
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
          {list.map((i, index) => (
            <ImgCard
              key={index}
              name={name}
              info={i}
              mark_list={mark_list}
              onClick={id => saveMarkInfo(id)}
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

  const url = 'https://acnhcdn.com/latest/FtrIcon/';

  const checkMark = list => {
    let total = list.length,
      num = 0;
    for (let i of list) {
      if (mark_list.includes(i.id)) num++;
    }
    return total === num;
  };

  const initSpan = num => {
    switch (num) {
      case 1:
        return 12;
      case 2:
        return 10;
      case 3:
        return 8;
      default:
        return 6;
    }
  };

  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.isMark]: checkMark(info.types),
      })}
    >
      <Row justify="center" className={styles.types_img}>
        {info.types.map(i => (
          <Col span={initSpan(info.types.length)} key={i.id}>
            <img
              className={classnames({
                [styles.isMark]: mark_list.includes(i.id),
                [styles.large]: info.types.length === 1,
                [styles.medium]: info.types.length === 2,
              })}
              onClick={() => onClick(i.id)}
              src={`${url}${i.img}.png`}
              alt="图标"
            />
          </Col>
        ))}
      </Row>
      <div className={styles.title}>{info.name}</div>
      <Row className={styles.desc} justify="center">
        <Col>{_STATUS['FUN_TYPE'][name][info.type]}</Col>
      </Row>
    </div>
  );
};
