import { useState } from 'react';
import TemplateComp from './components/TemplateComp';
import TabsComp from './components/TabsComp';
import rug_config from '@/pages/utils/rug_config';

export default function(props) {
  const config = [
    { value: '', label: '全部' },
    { value: 1, label: '里数机' },
    { value: 2, label: '骆驼' },
    { value: 3, label: 'DIY' },
    { value: 4, label: '活动' },
  ];

  const [active, setActive] = useState('');

  return (
    <>
      <TabsComp columns={config} active={active} onChange={setActive} />
      <TemplateComp
        {...props}
        active={active}
        name="rug"
        config={rug_config.map(i => ({
          ...i,
          img: `https://acnhcdn.com/latest/FtrIcon/${i.img}.png`,
        }))}
      />
    </>
  );
}
