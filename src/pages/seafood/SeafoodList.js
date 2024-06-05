import { Table, Row } from 'antd';
import MonthLine from '@/components/MonthLine';
import { initList } from '@/pages/utils/utils';
import seafood_config from '@/pages/utils/seafood_config';
import { initStatus } from '@/pages/utils/status';

import styles from '../fish/FishList.less';

export default function(props) {
  const { search, local, isHideMark, mark_list } = props;
  const dataSource = initList(seafood_config, search, local, 'SEAFOOD', isHideMark, mark_list);

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      width: '10%',
      fixed: 'left',
      render: (text, info, index) => (
        <Row>
          <img style={{ height: 24, marginRight: 6 }} src={info.img} alt="图片" />
          {text || info.jap_name}
        </Row>
      ),
    },
    { title: '编号', dataIndex: 'id', width: '6%', sorter: (a, b) => a.id - b.id },
    { title: '英译', dataIndex: 'eng_name', width: '10%' },
    { title: '日译', dataIndex: 'jap_name', width: '10%' },
    { title: '价格', width: '5%', dataIndex: 'price', sorter: (a, b) => a.price - b.price },
    {
      title: '形状',
      dataIndex: 'shape',
      width: '5%',
      sorter: (a, b) => a.shape - b.shape,
      render: text => initStatus(text, 'SEAFOOD_SHAPE'),
    },
    {
      title: '速度',
      dataIndex: 'speed',
      width: '5%',
      sorter: (a, b) => a.speed - b.speed,
      render: text => initStatus(text, 'SEAFOOD_SPEED'),
    },
    {
      title: '时间',
      dataIndex: 'time',
      width: '10%',
      sorter: (a, b) => a.time - b.time,
      render: text => initStatus(text, 'SEAFOOD_TIME'),
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
        scroll={{ x: 1500 }}
        pagination={false}
      />
    </div>
  );
}
