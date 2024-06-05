import { useState } from 'react';
import { Tabs, Switch } from 'antd';
import SearchMap from '../fossil/components/SearchMap';
import { setConfigInfo, getConfigInfo } from '@/pages/utils/utils';
import Wallpaper from './Wallpaper';
import Flooring from './Flooring';
import Fence from './Fences';
import DoorDecor from './DoorDecor';
import WallMounted from './WallMounted';
import Miscellaneous from './Miscellaneous';
import Rugs from './Rugs';
import Housewares from './Housewares';
import styles from './index.less';

const { TabPane } = Tabs;

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置

  const [active, setActive] = useState('housewares'), // tab
    [search, setSearch] = useState({}), // 搜索条件
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false); // 是否过滤标记结果

  const nav_config = [
    { value: 'housewares', label: '家具', comp: <Housewares /> },
    { value: 'miscellaneous', label: '小物件', comp: <Miscellaneous /> },
    { value: 'wallMounted', label: '壁挂物', comp: <WallMounted /> },
    { value: 'doorDecor', label: '门饰', comp: <DoorDecor /> },
    { value: 'wallpaper', label: '壁纸' },
    { value: 'flooring', label: '地板' },
    { value: 'rugs', label: '地毯', comp: <Rugs /> },
    { value: 'fence', label: '栅栏', comp: <Fence /> },
  ];

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
      </div>
      <Tabs size="small" value={active} onChange={val => setActive(val)}>
        {nav_config.map(i => (
          <TabPane tab={i.label} key={i.value}></TabPane>
        ))}
      </Tabs>
      {active === 'wallpaper' && <Wallpaper {...props} />}
      {active === 'flooring' && <Flooring {...props} />}
      {active === 'fence' && <Fence {...props} />}
      {active === 'doorDecor' && <DoorDecor {...props} />}
      {active === 'rugs' && <Rugs {...props} />}
      {active === 'wallMounted' && <WallMounted {...props} />}
      {active === 'miscellaneous' && <Miscellaneous {...props} />}
      {active === 'housewares' && <Housewares {...props} />}
    </div>
  );
}
