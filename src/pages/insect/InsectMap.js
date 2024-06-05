import { useState } from 'react';
import { Row } from 'antd';
import TimeLine from '@/components/TimeLine';
import NbTips from '@/components/NbTips';
import { ImgCard, InfoCard, MonthComp } from '../fish/FishMap';
import { initListToMap, initWidth, requireImg } from '@/pages/utils/utils';
import { initStatus } from '@/pages/utils/status';
import insect_config from '@/pages/utils/insect_config';

import styles from '../fish/FishMap.less';

export default function(props) {
  const [current, setCurrent] = useState({}),
    {
      local,
      search,
      isHideSearch,
      isHideMark,
      mark_mode,
      mark_list,
      saveMarkInfo,
      isHideModel,
      model_mode,
      model_list,
      saveModelInfo,
    } = props,
    list = initListToMap(
      insect_config,
      isHideSearch,
      local,
      search,
      'INSECT',
      isHideMark,
      mark_list,
      isHideModel,
      model_list,
    );

  return (
    <>
      <div className={styles.control}></div>
      <div className={styles.container}>
        {list.length > 0 ? (
          <div className={styles.card_list} style={{ width: initWidth(list.length) }}>
            {list.map(i => (
              <ImgCard
                key={i.id}
                info={i}
                type="insect"
                type_status="INSECT"
                current={current}
                search={search}
                local={local}
                isHide={isHideSearch}
                mark_list={mark_list}
                model_list={model_list}
                months={local === 'north' ? i.month_n : i.month_s}
                onClick={() => {
                  mark_mode && saveMarkInfo(i.id);
                  model_mode && saveModelInfo(i.id);
                  !mark_mode && !model_mode && setCurrent(current.id === i.id ? {} : i);
                }}
              />
            ))}
          </div>
        ) : (
          <div>{JSON.stringify(search) === '{}' && <NbTips />}</div>
        )}
      </div>
      {current.id && (
        <Row className={styles.info_content}>
          <img
            className={styles.close}
            onClick={() => setCurrent({})}
            src={requireImg('', `close.png`)}
            alt="关闭"
          />
          <InfoCard title="活跃月份">
            <MonthComp
              local={local}
              active={local === 'north' ? current.month_n : current.month_s}
            />
          </InfoCard>
          <InfoCard title="活跃时间">
            <TimeLine list={initStatus(current.time, 'INSECT_TIME', 'list')} />
            <p>{initStatus(current.time, 'INSECT_TIME')}</p>
          </InfoCard>
          <InfoCard title="售价">{current.price}</InfoCard>
          <InfoCard title="地点">
            {initStatus(current.place, 'INSECT_PLACE')}
            {current.desc && <span>({current.desc})</span>}
          </InfoCard>
          <InfoCard title="天气">{initStatus(current.condit, 'INSECT_CONDIT')}</InfoCard>
          <InfoCard title="译名">
            <div>英：{current.eng_name}</div>
            <div>日：{current.jap_name}</div>
          </InfoCard>
        </Row>
      )}
    </>
  );
}
