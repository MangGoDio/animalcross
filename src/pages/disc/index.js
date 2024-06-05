import { useState } from 'react';
import classnames from 'classnames';
import { Switch } from 'antd';
import NbTips from '@/components/NbTips';
import SearchMap from '../fossil/components/SearchMap';
import {
  requireImg,
  getMarkInfo,
  setMarkInfo,
  setConfigInfo,
  getConfigInfo,
} from '@/pages/utils/utils';
import disc_config from '@/pages/utils/disc_config';
import styles from './index.less';

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置

  const initListToMap = (list, search, isHideMark, mark_list) => {
    if (isHideMark && mark_list.length > 0) {
      list = list.filter(i => !mark_list.includes(i.id));
    }

    if (search && search.name) {
      list = list.filter(i => i.name.search(search.name) !== -1);
      return list;
    }

    return list;
  };

  const [search, setSearch] = useState({}), // 搜索条件
    [mark_list, setMarkList] = useState(getMarkInfo('mango_disc') || []), // 标记列表
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false), // 是否过滤标记结果
    list = initListToMap(disc_config, search, isHideMark, mark_list);

  // 储存/取消标记的物种
  const saveMarkInfo = id => {
    let arr = [];
    if (mark_list.includes(id)) {
      arr = mark_list.filter(i => i !== id);
    } else {
      arr = [...mark_list, id];
    }
    setMarkList(arr);
    setMarkInfo(arr, 'mango_disc');
  };

  return (
    <div style={{ padding: 8 }}>
      <div className={styles.container}>
        <SearchMap value={search} onChange={value => setSearch(value)} />
        <div style={{ marginBottom: 16 }}>
          过滤已拥有的唱片
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
                onClick={() => saveMarkInfo(i.id)}
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
  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.isMark]: mark_list.includes(info.id),
      })}
      onClick={onClick}
    >
      <img className={styles.disc_img} src={requireImg(`disc/`, `${info.id}.png`)} alt="图标" />
      <div>{info.name.length > 8 ? `${info.name.substring(0, 8)}...` : info.name}</div>
      {/* <div style={{ fontSize: 12 }}>￥{info.price}</div> */}
    </div>
  );
};
