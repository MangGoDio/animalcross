import { Row, Col } from 'antd';
import classnames from 'classnames';
import styles from './TabsComp.less';

export default function(props) {
  const { columns, active, onChange } = props;

  return (
    <Row gutter={24} style={{ margin: '0 0 0 2px' }}>
      {columns.map(i => (
        <Col
          className={classnames({
            [styles.tab]: true,
            [styles.active]: i.value === active,
          })}
          key={i.value}
          onClick={() => onChange(i.value)}
        >
          {i.label}
        </Col>
      ))}
    </Row>
  );
}
