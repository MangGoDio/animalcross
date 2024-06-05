import { Table, Row } from 'antd';
import MonthLine from '@/components/MonthLine';
import { requireImg, initList } from '@/pages/utils/utils';
import fish_config from '@/pages/utils/fish_config';
import { initStatus } from '@/pages/utils/status';

import styles from './FishList.less';

export default function(props) {
  const { search, local, isHideMark, mark_list } = props;
  const dataSource = initList(fish_config, search, local, 'FISH', isHideMark, mark_list);

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      width: '10%',
      fixed: 'left',
      render: (text, info) => (
        <Row>
          <img
            style={{ height: 24, marginRight: 6 }}
            src={requireImg(`fish/`, `${info.id}.png`)}
            alt="图片"
          />
          {text}
        </Row>
      ),
    },
    { title: '编号', dataIndex: 'id', width: '5%', sorter: (a, b) => a.id - b.id },
    { title: '英译', dataIndex: 'eng_name', width: '10%' },
    { title: '日译', dataIndex: 'jap_name', width: '10%' },
    { title: '价格', width: '5%', dataIndex: 'price', sorter: (a, b) => a.price - b.price },
    {
      title: '地点',
      dataIndex: 'place',
      width: '10%',
      sorter: (a, b) => a.place - b.place,
      render: text => initStatus(text, 'FISH_PLACE'),
    },
    {
      title: '形状',
      dataIndex: 'shape',
      width: '5%',
      sorter: (a, b) => a.shape - b.shape,
      render: text => initStatus(text, 'FISH_SHAPE'),
    },
    {
      title: '时间',
      dataIndex: 'time',
      width: '10%',
      sorter: (a, b) => a.time - b.time,
      render: (text, info) => {
        if ([27, 28].includes(info.id)) {
          const { local } = props;
          return (
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
          );
        } else {
          return initStatus(text, 'FISH_TIME');
        }
      },
    },
    {
      title: '月份',
      dataIndex: 'month',
      render: (_, { month_s, month_n }) => {
        const { local } = props,
          arr = local === 'north' ? month_n : month_s;
        return <MonthLine active={arr} />;
      },
    },
  ];

  return (
    <div className={styles.table}>
      <Table
        bordered
        size="small"
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        scroll={{ x: 1400 }}
        pagination={false}
      />
    </div>
  );
}
