import { useState } from 'react';
import { Radio, Row, Button, Switch } from 'antd';
import FishList from './FishList';
import FishMap from './FishMap';
import SearchMap from './components/SearchMap';
import { getMarkInfo, setMarkInfo, setConfigInfo, getConfigInfo } from '@/pages/utils/utils';

export default function() {
  const ac_config = getConfigInfo(); // 读取开关配置

  const [type, setType] = useState('map'),
    [local, setLocal] = useState('north'),
    [search, setSearch] = useState({}), // 搜索条件
    [isHideSearch, setHideSearch] = useState(ac_config.hide_search ? true : false), // 是否过滤查询结果 // 当前选中
    [isHideMark, setHideMark] = useState(ac_config.hide_mark ? true : false), // 是否过滤标记结果
    [isHideModel, setHideModel] = useState(ac_config.hide_model ? true : false), // 是否过滤标记结果
    [mark_mode, setMarkMode] = useState(false), // 是否标记模式
    [model_mode, setModelMode] = useState(false), // 是否标本标记模式
    [mark_list, setMarkList] = useState(getMarkInfo('mango_fish') || []), // 标记列表
    [model_list, setModelList] = useState(getMarkInfo('mango_fish_model') || []); // 标记列表

  // 储存/取消标记的物种
  const saveMarkInfo = (id, bool) => {
    let arr = [];
    if (mark_list.includes(id)) {
      if (bool) {
        arr = mark_list;
      } else {
        arr = mark_list.filter(i => i !== id);
      }
    } else {
      arr = [...mark_list, id];
    }
    setMarkList(arr);
    setMarkInfo(arr, 'mango_fish');
  };

  // 储存/取消标记的模板
  const saveModelInfo = id => {
    saveMarkInfo(id, true);
    let arr = [];
    if (model_list.includes(id)) {
      arr = model_list.filter(i => i !== id);
    } else {
      arr = [...model_list, id];
    }
    setModelList(arr);
    setMarkInfo(arr, 'mango_fish_model');
  };

  const props = {
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
  };

  return (
    <div style={{ padding: 8 }}>
      <Row align="middle" style={{ marginBottom: 16 }}>
        <Radio.Group
          value={type}
          buttonStyle="solid"
          style={{ marginRight: 16 }}
          onChange={({ target }) => setType(target.value)}
        >
          <Radio.Button value="map">图鉴</Radio.Button>
          <Radio.Button value="list">表格</Radio.Button>
        </Radio.Group>
        <Radio.Group value={local} onChange={({ target }) => setLocal(target.value)}>
          <Radio value="north">北半球</Radio>
          <Radio value="south">南半球</Radio>
        </Radio.Group>
      </Row>
      <SearchMap
        isHide={isHideSearch}
        onSwitch={value => {
          setHideSearch(value);
          setConfigInfo({ ...ac_config, hide_search: value });
        }}
        value={search}
        isList={type === 'list'}
        onChange={value => setSearch(value)}
      />
      <div style={{ marginBottom: 16 }}>
        {type === 'map' && (
          <Button
            style={{ marginRight: 16 }}
            onClick={() => {
              setMarkMode(!mark_mode);
              setModelMode(false);
            }}
          >
            {mark_mode ? '退出标记模式' : '标记我有的鱼'}
          </Button>
        )}
        <span>
          过滤已拥有的鱼
          <Switch
            style={{ marginLeft: 6 }}
            checked={isHideMark}
            onChange={() => {
              let value = !isHideMark;
              setHideMark(value);
              setConfigInfo({ ...ac_config, hide_mark: value });
            }}
          />
        </span>
      </div>
      <div style={{ marginBottom: 16 }}>
        {type === 'map' && (
          <Button
            style={{ marginRight: 16 }}
            onClick={() => {
              setModelMode(!model_mode);
              setMarkMode(false);
            }}
          >
            {model_mode ? '退出标本标记' : '标记已拥有标本'}
          </Button>
        )}
        <span>
          过滤已拥有的标本
          <Switch
            style={{ marginLeft: 6 }}
            checked={isHideModel}
            onChange={() => {
              let value = !isHideModel;
              setHideModel(value);
              setConfigInfo({ ...ac_config, hide_model: value });
            }}
          />
        </span>
      </div>

      {type === 'list' && <FishList {...props} />}
      {type === 'map' && <FishMap {...props} />}
    </div>
  );
}
