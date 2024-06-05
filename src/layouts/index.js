import styles from './index.css';
import { NavHeader } from '../pages';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <NavHeader current={props.location.pathname} />
      {props.children}
    </div>
  );
}

export default BasicLayout;
