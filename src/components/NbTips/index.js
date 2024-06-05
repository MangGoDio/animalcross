import { requireImg } from '@/pages/utils/utils';

const Tips = () => (
  <img style={{ width: '100%', maxWidth: 400 }} src={requireImg(``, `nb.jpg`)} alt="牛逼" />
);

export default Tips;
