import { useState } from 'react';
import { Switch } from 'antd';
import SearchMap from '../fossil/components/SearchMap';
import { setConfigInfo, getConfigInfo } from '@/pages/utils/utils';
import TemplateComp from '@/pages/furniture/components/TemplateComp';
import TabsComp from '@/pages/furniture/components/TabsComp';
import umbrellas_config from '@/pages/utils/umbrellas_config';
import styles from '@/pages/furniture/index.less';

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置
  const config = [
    { value: '', label: '全部' },
    { value: 1, label: '商店' },
    { value: 2, label: 'DIY' },
    { value: 3, label: '活动' },
  ];
  const [active, setActive] = useState(''),
    [search, setSearch] = useState({}), // 搜索条件
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false); // 是否过滤标记结果

  const props = { search, isHideMark };

  return (
    <div style={{ padding: 8 }}>
      <div className={styles.container}>
        <SearchMap value={search} onChange={value => setSearch(value)} />
        <div style={{ marginBottom: 6 }}>
          过滤已拥有
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
        <TemplateComp
          {...props}
          active={active}
          name="umbrellas"
          config={umbrellas_config.map(i => ({
            ...i,
            img: `https://acnhcdn.com/latest/FtrIcon/${i.img}.png`,
          }))}
        />
      </div>
    </div>
  );
}
