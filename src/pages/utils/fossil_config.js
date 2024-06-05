const config = [
  { id: 1, name: '甲龙的头', price: 3500, img: true },
  { id: 2, name: '甲龙的身体', price: 3000, img: true },
  { id: 3, name: '甲龙的尾巴', price: 2000, img: true },
  { id: 4, name: '巨角犀的头', price: 4500, img: true },
  { id: 5, name: '巨角犀的身体', price: 3500, img: true },
  { id: 6, name: '巨角犀的尾巴', price: 3000, img: true },
  { id: 7, name: '帝龟的头', price: 4000, img: true },
  { id: 8, name: '帝龟的身体', price: 3500, img: true },
  { id: 9, name: '异齿龙的头', price: '???', img: true },
  { id: 10, name: '异齿龙的身体', price: 5000, img: false },
  { id: 11, name: '大眼鱼龙的头', price: 2500, img: true },
  { id: 12, name: '大眼鱼龙的身体', price: 2000, img: true },
  { id: 13, name: '禽龙的头', price: 4000, img: true },
  { id: 14, name: '禽龙的身体', price: 3500, img: true },
  { id: 15, name: '禽龙的尾巴', price: 3000, img: true },
  { id: 16, name: '副栉龙的头', price: 3500, img: true },
  { id: 17, name: '副栉龙的身体', price: 3000, img: true },
  { id: 18, name: '副栉龙的尾巴', price: 2500, img: true },
  { id: 19, name: '恐爪龙的头', price: 3000, img: true },
  { id: 20, name: '恐爪龙的尾巴', price: 2500, img: true },
  { id: 21, name: '剑齿虎的头', price: 2500, img: true },
  { id: 22, name: '剑齿虎的身体', price: 2000, img: true },
  { id: 23, name: '长毛象的头', price: 3000, img: true },
  { id: 24, name: '长毛象的身体', price: 2500, img: true },
  { id: 25, name: '梁龙的头', price: 5000, img: true },
  { id: 26, name: '梁龙的脖子', price: 4500, img: true },
  { id: 27, name: '梁龙的胸部', price: 4000, img: true },
  { id: 28, name: '梁龙的腰部', price: 4500, img: false },
  { id: 29, name: '梁龙的尾巴', price: 5000, img: false },
  { id: 30, name: '梁龙的尾巴尖', price: 4000, img: false },
  { id: 31, name: '棘龙的头', price: 4000, img: true },
  { id: 32, name: '棘龙的身体', price: 3000, img: true },
  { id: 33, name: '棘龙的尾巴', price: 2500, img: true },
  { id: 34, name: '剑龙的头', price: '???', img: true },
  { id: 35, name: '剑龙的身体', price: 4500, img: true },
  { id: 36, name: '剑龙的尾巴', price: 4000, img: true },
  { id: 37, name: '双叶铃木龙的头', price: 4000, img: true },
  { id: 38, name: '双叶铃木龙的身体', price: 4500, img: true },
  { id: 39, name: '双叶铃木龙的尾巴', price: 4500, img: true },
  { id: 40, name: '无齿翼龙的头', price: 4000, img: true },
  { id: 41, name: '无齿翼龙的右翼', price: 4500, img: true },
  { id: 42, name: '无齿翼龙的左翼', price: 4500, img: true },
  { id: 43, name: '暴龙的头', price: 6000, img: true },
  { id: 44, name: '暴龙的身体', price: 5500, img: true },
  { id: 45, name: '暴龙的尾巴', price: 5000, img: true },
  { id: 46, name: '三角龙的头', price: 5500, img: true },
  { id: 47, name: '三角龙的身体', price: 5000, img: true },
  { id: 48, name: '三角龙的尾巴', price: 4500, img: true },
  { id: 49, name: '腕龙的头', price: 6000, img: false },
  { id: 50, name: '腕龙的胸部', price: 5500, img: false },
  { id: 51, name: '腕龙的腰部', price: 5000, img: false },
  { id: 52, name: '腕龙的尾巴', price: 5500, img: false },
  { id: 53, name: '厚头龙的头', price: 4000, img: true },
  { id: 54, name: '厚头龙的身体', price: 3500, img: true },
  { id: 55, name: '风神翼龙的头', price: 4500, img: true },
  { id: 56, name: '风神翼龙的右翼', price: 5000, img: true },
  { id: 57, name: '风神翼龙的左翼', price: 5000, img: true },
  { id: 58, name: '大角鹿的右半身', price: 5500, img: true },
  { id: 59, name: '大角鹿的左半身', price: 4000, img: false },
  { id: 60, name: '琥珀', price: 1200, img: true },
  { id: 61, name: '菊石', price: 1100, img: true },
  { id: 62, name: '粪化石', price: 1100, img: true },
  { id: 63, name: '始祖鸟', price: 1300, img: false },
  { id: 64, name: '恐龙脚印化石', price: 1000, img: true },
  { id: 65, name: '南方古猿', price: 1100, img: true },
  { id: 66, name: '鲨鱼牙齿化石', price: 1000, img: false },
  { id: 67, name: '三叶虫', price: 1300, img: true },
  { id: 68, name: '奇虾', price: 2000, img: true },
  { id: 69, name: '邓氏鱼', price: 3500, img: true },
  { id: 70, name: '丰娇昆明鱼', price: 1500, img: true },
  { id: 71, name: '新翼鱼', price: 2000, img: true },
  { id: 72, name: '棘螈', price: 2000, img: true },
  { id: 73, name: '侏罗兽', price: 1500, img: true },
  { id: 74, name: '化石', price: 100, img: false },
  { id: 75, name: '1', price: 0, img: false },
  { id: 76, name: '1', price: 0, img: false },
  { id: 77, name: '1', price: 0, img: false },
  { id: 78, name: '1', price: 0, img: false },
];

export default config;

// list = [];
// for (let i = 0; i < config.length; i++) {
//   config[i].id = i + 1;
//   list.push(config[i]);
// }
// console.log(JSON.stringify(list));