import { useState, useEffect } from 'react';
import { Input, Button, message } from 'antd';
// import res from '@/pages/utils/funiture.json';
// import sort_list from '@/pages/utils/insect_config';
import { getMarkInfo, setMarkInfo } from '@/pages/utils/utils';

const { TextArea } = Input;

export default function() {
  const [data, setData] = useState();

  useEffect(() => {
    window.addEventListener('message', e => {
      console.log(e);
      console.log('数据交互B');
      setTimeout(() => {
        window.parent.postMessage({ refresh: 'id' }, '666');
      }, 5000);
    });
  }, []);

  // 数据提
  // let arr = [];
  // for (let i of res) {
  //   if (i.name.indexOf('horned') > -1) {
  //     arr.push(i);
  //   }
  // }

  // console.log(arr);

  // let act = [];

  // for (let i of sort_list) {
  //   for (let j of arr) {
  //     if (`${i.eng_name} model` === j.name) {
  //       i.model_img = j.content.image;
  //     }
  //   }
  // }

  // console.log([...new Set(act)]);

  // console.log(JSON.stringify(sort_list));

  // let config = [];
  // for (let i of arr) {
  //   config.push({
  //     id: 1,
  //     name: '地毯',
  //     eng: i.name,
  //     price: i.content.buy,
  //     type: i.content.dIY ? 3 : 2,
  //     img: i.content.filename,
  //   });
  // }

  // console.log(JSON.stringify(config));

  // 数据排序
  // let sortArray = sort_list.sort(function(str1, str2) {
  //   let name1 = str1.name,
  //     name2 = str2.name;
  //   return name1.localeCompare(name2, 'zh');
  // });

  // console.log(JSON.stringify(sortArray));

  // 重新编号
  // let k = 1;
  // for (let i of sort_list) {
  //   for (let j of i.types) {
  //     j.id = k++;
  //   }
  // }

  // console.log(JSON.stringify(sort_list));

  // let arr = ['_0_0', '_1_0', '_2_0', '_3_0', '4_0', '_5_0', '_6_0', '_7_0'];

  // 清除多余图片
  // for (let i of sort_list) {
  //   for (let j of i.types) {
  //     if (i.types.length > 8) {
  //       let bool = false;
  //       for (let k of arr) {
  //         if (j.img.indexOf(k) !== -1) bool = true;
  //       }
  //       if (!bool) j.delete = true;
  //     }
  //   }
  // }
  // for (let i of sort_list) {
  //   i.types = i.types.filter(j => !j.delete);
  // }

  // console.log(JSON.stringify(sort_list));

  const importData = () => {
    let arr = [
      'fish',
      'fish_model',
      'insect',
      'insect_model',
      'seafood',
      'fossil',
      'disc',
      'artwork',
      'furniture',
      'face',
    ];
    if (data) {
      try {
        let obj = JSON.parse(data);
        if (typeof obj == 'object') {
          for (let i in obj) {
            if (i === 'furniture') {
              if (arr.includes(i) && Object.prototype.toString.call(obj[i]) === '[object Object]') {
                setMarkInfo(obj[i], `mango_${i}`);
              }
            } else {
              if (arr.includes(i) && Array.isArray(obj[i])) {
                setMarkInfo(obj[i], `mango_${i}`);
              }
            }
          }
          message.success('导入成功');
        }
      } catch (e) {
        message.warning('无效的数据');
      }
    }
  };

  const exportData = () => {
    let object = {
      fish: null,
      fish_model: null,
      insect: null,
      insect_model: null,
      seafood: null,
      fossil: null,
      disc: null,
      artwork: null,
      furniture: null,
      face: null,
    };
    for (let i in object) {
      let arr = getMarkInfo(`mango_${i}`);
      if (i === 'furniture') {
        if (!arr || JSON.stringify(arr) === '{}') {
          delete object[i];
        } else {
          object[i] = arr;
        }
      } else {
        if (arr && arr.length > 0) {
          object[i] = arr;
        } else {
          delete object[i];
        }
      }
    }
    setData(JSON.stringify(object));
  };

  return (
    <div style={{ padding: 8 }}>
      <div>
        <TextArea
          value={data}
          onChange={({ target }) => setData(target.value)}
          autoSize={{ minRows: 5 }}
          style={{ resize: 'none', maxWidth: 600 }}
          placeholder="点击按钮导入/导出标记数据"
        />
      </div>
      <div style={{ marginTop: 12 }}>
        <Button style={{ marginRight: 12 }} onClick={() => importData()}>
          导入
        </Button>
        <Button onClick={() => exportData()}>导出</Button>
      </div>
    </div>
  );
}
