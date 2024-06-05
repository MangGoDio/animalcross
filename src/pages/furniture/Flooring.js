import { useState } from 'react';
import TemplateComp from './components/TemplateComp';
import TabsComp from './components/TabsComp';
import floor_config from '@/pages/utils/floor_config';

export default function(props) {
  const config = [
    { value: '', label: '全部' },
    { value: 1, label: '商店' },
    { value: 2, label: '骆驼' },
    { value: 3, label: 'DIY' },
    { value: 4, label: '活动' },
  ];

  const [active, setActive] = useState('');

  return (
    <>
      <TabsComp columns={config} active={active} onChange={setActive} />
      <TemplateComp {...props} active={active} name="floor" config={floor_config} />
    </>
  );
}
