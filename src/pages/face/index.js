import { useState } from 'react';
import classnames from 'classnames';
import { Switch } from 'antd';
import NbTips from '@/components/NbTips';
import TabsComp from '@/pages/furniture/components/TabsComp';
import { getMarkInfo, setMarkInfo, setConfigInfo, getConfigInfo } from '@/pages/utils/utils';
import face_config from '@/pages/utils/face_config';
import styles from './index.less';

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置
  const [active, setActive] = useState('');

  const config = [
    { value: '', label: '全部' },
    { value: 0, label: '默认' },
    { value: 1, label: '普通' },
    { value: 2, label: '元气' },
    { value: 3, label: '成熟' },
    { value: 4, label: '大姐姐' },
    { value: 5, label: '悠闲' },
    { value: 6, label: '运动' },
    { value: 7, label: '暴躁' },
    { value: 8, label: '自恋' },
    { value: 9, label: '万圣节' },
    { value: 10, label: '时下热门' },
  ];

  const initListToMap = (list, isHideMark, mark_list = []) => {
    if (isHideMark) {
      list = list.filter(i => i.id && !mark_list.includes(i.id));
    }

    if (active || active === 0) {
      list = list.filter(i => i.type === active);
    }

    return list;
  };

  const [mark_list, setMarkList] = useState(getMarkInfo('mango_face') || []), // 标记列表
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false), // 是否过滤标记结果
    list = initListToMap(face_config, isHideMark, mark_list);

  // 储存/取消标记的物种
  const saveMarkInfo = id => {
    if (id) {
      let arr = [];
      if (mark_list.includes(id)) {
        arr = mark_list.filter(i => i !== id);
      } else {
        arr = [...mark_list, id];
      }
      setMarkList(arr);
      setMarkInfo(arr, 'mango_face');
    }
  };

  return (
    <div style={{ padding: 8 }}>
      <div className={styles.container}>
        <div style={{ marginBottom: 16 }}>
          过滤已拥有的表情
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
        <TabsComp columns={config} active={active} onChange={setActive} />
        {list.length > 0 ? (
          <div className={styles.card_list}>
            {list.map((i, index) => (
              <ImgCard
                key={index}
                info={i}
                mark_list={mark_list}
                onClick={() => saveMarkInfo(i.id)}
              />
            ))}
          </div>
        ) : (
          <div>{!active && active !== 0 && <NbTips />}</div>
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
        [styles.isMark]: !info.id || mark_list.includes(info.id),
      })}
      onClick={onClick}
    >
      <img src={`https://acnhcdn.com/latest/ManpuIcon/${info.img}`} alt="图标"></img>
      <p>{info.name}</p>
    </div>
  );
};
