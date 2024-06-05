import { useState } from 'react';
import { Row } from 'antd';
import classnames from 'classnames';
import TimeLine from '@/components/TimeLine';
import overTips from '@/assets/over_tips.png';
import nextTips from '@/assets/next_tips.png';
import {
  initListToMap,
  requireImg,
  initCanGet,
  isNeedWarning,
  isNextWarning,
  initWidth,
} from '@/pages/utils/utils';
import NbTips from '@/components/NbTips';
import { initStatus } from '@/pages/utils/status';
import fish_config from '@/pages/utils/fish_config';

import styles from './FishMap.less';

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
      fish_config,
      isHideSearch,
      local,
      search,
      'FISH',
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
                type="fish"
                type_status="FISH"
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
            {[27, 28].includes(current.id) ? (
              <>
                {local === 'north' ? (
                  <>
                    <div>3~6月 16点-9点</div>
                    <div>9~11月 全天</div>
                  </>
                ) : (
                  <>
                    <div>3~5月 全天</div>
                    <div>9~12月 16点-9点</div>
                  </>
                )}
              </>
            ) : (
              <TimeLine list={initStatus(current.time, 'FISH_TIME', 'list')} />
            )}

            <p>{initStatus(current.time, 'FISH_TIME')}</p>
          </InfoCard>
          <InfoCard title="售价">{current.price}</InfoCard>
          <InfoCard title="地点">{initStatus(current.place, 'FISH_PLACE')}</InfoCard>
          <InfoCard title="鱼影">
            {initStatus(current.shape, 'FISH_SHAPE')}
            {/* <img
              src={requireImg('fish_shape/', `${initStatus(current.shape, 'FISH_SHAPE')}.png`)}
              alt="鱼影"
            /> */}
          </InfoCard>
          <InfoCard title="译名">
            <div>英：{current.eng_name}</div>
            <div>日：{current.jap_name}</div>
          </InfoCard>
        </Row>
      )}
    </>
  );
}

// 图鉴卡片
export const ImgCard = props => {
  const {
    info,
    local,
    months,
    isHide,
    current,
    search,
    onClick,
    type,
    type_status,
    mark_list,
    model_list = [],
  } = props;
  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.canGet]: !isHide && initCanGet(local, info, search, type_status),
        [styles.active]: info.id === current.id,
        [styles.isMark]: mark_list.includes(info.id),
        [styles.isModel]: model_list.includes(info.id),
      })}
      onClick={onClick}
    >
      <>
        {type === 'seafood' ? (
          <img className={styles.pic} src={info.img} alt="图标" />
        ) : (
          <>
            {model_list.includes(info.id) ? (
              <img
                className={styles.pic}
                src={`https://acnhcdn.com/latest/FtrIcon/${info.model_img}.png`}
                alt="图标"
              />
            ) : (
              <img
                className={styles.pic}
                src={requireImg(`${type}/`, `${info.id}.png`)}
                alt="图标"
              />
            )}
          </>
        )}
      </>
      <div>{info.name.length > 6 ? `${info.name.substring(0, 6)}...` : info.name}</div>
      <div style={{ fontSize: 12 }}>￥{info.price}</div>
      <img
        alt="过期提醒"
        className={classnames({
          [styles.tips_img]: true,
          [styles.show]: isNeedWarning(months),
        })}
        src={overTips}
      />
      <img
        alt="即将上线"
        className={classnames({
          [styles.next_img]: true,
          [styles.show]: isNextWarning(months),
        })}
        src={nextTips}
      />
    </div>
  );
};

// 标题信息
export const InfoCard = props => (
  <div className={styles.info_card}>
    <div className={styles.title}>{props.title}</div>
    <div>{props.children}</div>
  </div>
);

// 月份组件
export const MonthComp = props => {
  let list = [],
    { active = [] } = props;
  for (let i = 0, dio = 12; i < dio; i++) {
    let bool = active.includes(i + 1) || active.length === 0 ? true : false;
    list.push(
      <div key={i}>
        <span className={bool ? styles.active : styles.normal}>{i + 1}月</span>
      </div>,
    );
  }
  return <div className={styles.month_table}>{list}</div>;
};
