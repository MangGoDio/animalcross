import { useState } from 'react';
import TemplateTypeComp from './components/TemplateTypeComp';
import TabsComp from './components/TabsComp';
import door_config from '@/pages/utils/door_config';

export default function(props) {
  const config = [
    { value: '', label: '全部' },
    { value: 1, label: '常规' },
    { value: 2, label: 'DIY' },
    { value: 3, label: '活动' },
  ];

  const [active, setActive] = useState('');

  return (
    <>
      <TabsComp columns={config} active={active} onChange={setActive} />
      <TemplateTypeComp {...props} active={active} name="door" config={door_config} />
    </>
  );
}
