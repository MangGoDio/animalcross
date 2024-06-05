import TemplateComp from './components/TemplateComp';
import fence_config from '@/pages/utils/fence_config';

export default function(props) {
  return <TemplateComp {...props} name="fence" config={fence_config} />;
}
