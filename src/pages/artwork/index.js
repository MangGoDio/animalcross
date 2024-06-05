import { useState } from 'react';
import classnames from 'classnames';
import { Switch, Row } from 'antd';
import NbTips from '@/components/NbTips';
import SearchMap from '../fossil/components/SearchMap';
import { getMarkInfo, setMarkInfo, setConfigInfo, getConfigInfo } from '@/pages/utils/utils';
import artwork_config from '@/pages/utils/artwork_config';
import styles from './index.less';

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置

  const initListToMap = (list, search, isHideMark, mark_list) => {
    if (isHideMark && mark_list.length > 0) {
      list = list.filter(i => {
        if (i.fake_id) {
          return !(mark_list.includes(i.id) && mark_list.includes(i.fake_id));
        } else {
          return !mark_list.includes(i.id);
        }
      });
    }

    if (search && search.name) {
      list = list.filter(
        i => i.name.search(search.name) !== -1 || i.title.search(search.name) !== -1,
      );
      return list;
    }

    return list;
  };

  const [search, setSearch] = useState({}), // 搜索条件
    [mark_list, setMarkList] = useState(getMarkInfo('mango_artwork') || []), // 标记列表
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false), // 是否过滤标记结果
    list = initListToMap(artwork_config, search, isHideMark, mark_list);

  // 储存/取消标记的物种
  const saveMarkInfo = id => {
    let arr = [];
    if (mark_list.includes(id)) {
      arr = mark_list.filter(i => i !== id);
    } else {
      arr = [...mark_list, id];
    }
    setMarkList(arr);
    setMarkInfo(arr, 'mango_artwork');
  };

  return (
    <div style={{ padding: 8 }}>
      <div className={styles.container}>
        <SearchMap value={search} onChange={value => setSearch(value)} />
        <div style={{ marginBottom: 16 }}>
          过滤真/赝品收集全的艺术品
          <Switch
            style={{ marginLeft: 6 }}
            checked={isHideMark}
            onChange={() => {
              let value = !isHideMark;
              setHideMark(value);
              setConfigInfo({ ...ac_config, hide_mark: value });
            }}
          />
        </div>
        {list.length > 0 ? (
          <div className={styles.card_list}>
            {list.map(i => (
              <ImgCard
                key={i.id}
                info={i}
                search={search}
                mark_list={mark_list}
                onClick={id => saveMarkInfo(id)}
              />
            ))}
          </div>
        ) : (
          <div>{JSON.stringify(search) === '{}' && <NbTips />}</div>
        )}
      </div>
    </div>
  );
}

// 图鉴卡片
const ImgCard = props => {
  const { info, onClick, mark_list } = props;

  const initMark = ({ id, fake_id = '' }) => {
    let bool = mark_list.includes(id);
    if (fake_id) {
      return bool && mark_list.includes(fake_id);
    }
    return bool;
  };

  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.isMark]: initMark(info),
      })}
    >
      <Row>
        <div
          onClick={() => onClick(info.id)}
          className={classnames({
            [styles.item]: true,
            [styles.isMark]: mark_list.includes(info.id),
          })}
        >
          <img src={info.right} alt="真品" />
        </div>
        {info.fake_id && (
          <div
            onClick={() => onClick(info.fake_id)}
            className={classnames({
              [styles.item_2]: true,
              [styles.isMark]: mark_list.includes(info.fake_id),
            })}
          >
            <img src={info.error} alt="赝品" />
          </div>
        )}
      </Row>

      <div className={styles.title}>《{info.name}》</div>
      <div style={{ borderBottom: '1px solid #dcd1a0' }}>{info.title}</div>
      <div>{info.method || '无赝品'}</div>
    </div>
  );
};
