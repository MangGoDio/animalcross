import _STATUS from './status';

// 引入图片
export const requireImg = (src, name) => {
  return require('../../assets/' + src + name);
};

// 筛选物种
export const initCanGet = (local, info, search, type) => {
  let lock = [],
    bool = false;

  if (search.month && search.month.length > 0) {
    let list = local === 'north' ? info.month_n : info.month_s;
    let bool_month = false;
    for (let i of search.month) {
      if (list.includes(i)) bool_month = true;
    }
    lock.push(bool_month || list.length === 0);
  }
  if (search.place && search.place.length > 0) lock.push(search.place.includes(info.place));
  if (search.shape && search.shape.length > 0) lock.push(search.shape.includes(info.shape));
  if (search.speed && search.speed.length > 0) lock.push(search.speed.includes(info.speed));
  if (search.condit) lock.push(search.condit === info.condit);
  if (search.start_time || search.end_time)
    lock.push(checkTimeRange(search, info.time, type, local, search.month));
  if (lock.length !== 0 && !lock.includes(false)) bool = true;
  return bool;
};

// 两种特殊时间的鱼额外处理
const specialFishMonth = (local, month) => {
  let allday = false,
    notAllday = false;
  if (local === 'north') {
    for (let i of month) {
      if ([9, 10, 11].includes(i)) allday = true;
      if ([3, 4, 5, 6].includes(i)) notAllday = true;
    }
  }
  if (local === 'south') {
    for (let i of month) {
      if ([3, 4, 5].includes(i)) allday = true;
      if ([9, 10, 11, 12].includes(i)) notAllday = true;
    }
  }
  if (!allday && notAllday) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  } else {
    return [];
  }
};

// 判断筛选用的时间段是否包含该物种时间
const checkTimeRange = ({ start_time = 0, end_time = 24 }, time, type, local, month) => {
  let list = [],
    time_arr = [],
    count = 0;

  if (time === 'special') {
    // 判断是否有月份
    if (month && month.length > 0) {
      list = specialFishMonth(local, month);
    } else {
      // 无月份按全天处理
      list = [];
    }
  } else {
    for (let i of _STATUS[`${type}_TIME`]) {
      if (i.value === time) list = i.list;
    }
  }

  if (list.length > 0) {
    // 根据开始结束时间生成已选择的时间组
    if (start_time === end_time) {
      time_arr = [`${start_time - 1}-${start_time}`, `${end_time}-${end_time + 1}`];
    }

    if (start_time < end_time) {
      for (let i = start_time; i < end_time; i++) time_arr.push(`${i}-${i + 1}`);
    }
    if (start_time > end_time) {
      for (let i = 0; i < end_time; i++) time_arr.push(`${i}-${i + 1}`);
      for (let i = start_time; i < 24; i++) {
        time_arr.push(`${i}-${i + 1}`);
      }
    }
    let range_list = [];
    for (let i of list) {
      if (list.includes(i + 1)) {
        range_list.push(`${i}-${i + 1}`);
      }
    }

    for (let i of range_list) if (time_arr.includes(i)) count++;
    return count >= 1;
  } else {
    return true;
  }
};

// 初始化表格列
export const initList = (list, search, local, type, isHideMark, mark_list) => {
  if (isHideMark && mark_list.length > 0) {
    list = list.filter(i => !mark_list.includes(i.id));
  }
  if (JSON.stringify(search) !== '{}') {
    list = list.filter(i => initCanGet(local, i, search, type));
  }
  return list;
};

// 初始化图鉴列
export const initListToMap = (
  list,
  isHide,
  local,
  search,
  type,
  isHideMark,
  mark_list,
  isHideModel,
  model_list,
) => {
  if (isHideMark && mark_list.length > 0) {
    list = list.filter(i => !mark_list.includes(i.id));
  }

  if (isHideModel && model_list.length > 0) {
    list = list.filter(i => !model_list.includes(i.id));
  }

  if (isHide && JSON.stringify(search) !== '{}') {
    list = list.filter(i => initCanGet(local, i, search, type));
  }
  let arr = [],
    index_arr = [0, 1, 2, 3, 4];
  for (let i of index_arr) {
    for (let j = i, dio = list.length; j < dio; j = j + 5) arr.push(list[j]);
  }
  return arr;
};

// 图鉴宽度
export const initWidth = length => {
  return 110 * Math.ceil(length / 5);
};

// 是否下个月过期
export const isNeedWarning = list => {
  const current_month = new Date().getMonth() + 1,
    next_month = current_month + 1 > 12 ? 1 : current_month + 1;
  return list.includes(current_month) && !list.includes(next_month);
};

// 是否下个月来临
export const isNextWarning = list => {
  const current_month = new Date().getMonth() + 1,
    next_month = current_month + 1 > 12 ? 1 : current_month + 1;
  return !list.includes(current_month) && list.includes(next_month);
};

// 标记数据保存
export const setMarkInfo = (list = [], name) => {
  localStorage.setItem(name, JSON.stringify(list));
};

// 标记获取数据
export const getMarkInfo = name => {
  return JSON.parse(localStorage.getItem(name));
};

// 数据保存
export const setConfigInfo = (info = {}) => {
  localStorage.setItem('mango_ac_config', JSON.stringify(info));
};

// 获取数据
export const getConfigInfo = () => {
  return JSON.parse(localStorage.getItem('mango_ac_config')) || {};
};
