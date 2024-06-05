import { useState } from 'react';
import TemplateTypeComp from './components/TemplateTypeComp';
import TabsComp from './components/TabsComp';
import housewares_config from '@/pages/utils/housewares_config';

export default function(props) {
  const config = [
    { value: 1, label: '常规' },
    { value: 2, label: '里数机' },
    { value: 3, label: 'DIY' },
    { value: 4, label: '吕游' },
    { value: 5, label: '钓鱼大赛' },
    { value: 6, label: '结婚季' },
    { value: 7, label: '生日' },
    { value: 8, label: '手游联动' },
    { value: 9, label: '捕虫大赛' },
    { value: 10, label: '其他' },
    { value: 11, label: '海盗吕游' },
    { value: '', label: '全部' },
  ];

  const [active, setActive] = useState(1);

  return (
    <>
      <TabsComp columns={config} active={active} onChange={setActive} />
      <TemplateTypeComp {...props} active={active} name="housewares" config={housewares_config} />
    </>
  );
}
