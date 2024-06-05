import { useState } from 'react';
import TemplateTypeComp from './components/TemplateTypeComp';
import TabsComp from './components/TabsComp';
import wall_config from '@/pages/utils/wall_config';

export default function(props) {
  const config = [
    { value: '', label: '全部' },
    { value: 1, label: '常规' },
    { value: 3, label: 'DIY' },
    { value: 5, label: '钓鱼大赛' },
    { value: 6, label: '结婚季' },
    { value: 9, label: '捕虫大赛' },
    { value: 10, label: '其他' },
    { value: 14, label: '快乐家协会' },
    { value: 15, label: '妈妈' },
    { value: 16, label: '博物馆日' },
  ];
  const [active, setActive] = useState('');

  return (
    <>
      <TabsComp columns={config} active={active} onChange={setActive} />
      <TemplateTypeComp {...props} active={active} name="wallMounted" config={wall_config} />
    </>
  );
}
