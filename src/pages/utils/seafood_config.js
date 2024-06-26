// shape 1小 2中 3大
// time 1全天  2 9-16  3 16-9  4 4-21  5 21-4  6 9-16&21-4

const config = [
  {
    id: 1,
    name: '裙带菜',
    eng_name: 'seaweed',
    jap_name: 'ワカメ',
    price: 600,
    shape: 3,
    speed: 1,
    month_n: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    month_s: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-seaweed.png/revision/latest/scale-to-width-down/64?cb=20200705032224',
  },
  {
    id: 2,
    name: '海葡萄',
    eng_name: 'sea grapes',
    jap_name: 'ウミブドウ',
    price: 900,
    shape: 1,
    speed: 1,
    month_n: [6, 7, 8, 9],
    month_s: [1, 2, 3, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/5/51/NH-Icon-seagrapes.png/revision/latest/scale-to-width-down/64?cb=20200705031927',
  },
  {
    id: 3,
    name: '海参',
    eng_name: 'sea cucumber',
    jap_name: 'ナマコ',
    price: 500,
    shape: 2,
    speed: 2,
    month_n: [1, 2, 3, 4, 11, 12],
    month_s: [5, 6, 7, 8, 9, 10],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fc/NH-Icon-seacucumber.png/revision/latest/scale-to-width-down/64?cb=20200704040731',
  },
  {
    id: 4,
    name: '海猪',
    eng_name: 'sea pig',
    jap_name: 'センジュナマコ',
    price: 10000,
    shape: 1,
    speed: 6,
    month_n: [1, 2, 11, 12],
    month_s: [5, 6, 7, 8],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/3/39/NH-Icon-seapig.png/revision/latest/scale-to-width-down/64?cb=20200704040518',
  },
  {
    id: 5,
    name: '海星',
    eng_name: 'sea star',
    jap_name: 'ヒトデ',
    price: 500,
    shape: 1,
    speed: 2,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-seastar.png/revision/latest/scale-to-width-down/64?cb=20200705031036',
  },
  {
    id: 6,
    name: '海胆',
    eng_name: 'sea urchin',
    jap_name: 'ウニ',
    price: 1700,
    shape: 1,
    speed: 3,
    month_n: [5, 6, 7, 8, 9],
    month_s: [1, 2, 3, 11, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d6/NH-Icon-seaurchin.png/revision/latest/scale-to-width-down/64?cb=20200705031938',
  },
  {
    id: 7,
    name: '石笔海胆',
    eng_name: 'slate pencil urchin',
    jap_name: 'パイプウニ',
    price: 2000,
    shape: 2,
    speed: 4,
    month_n: [5, 6, 7, 8, 9],
    month_s: [1, 2, 3, 11, 12],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-slatepencilurchin.png/revision/latest/scale-to-width-down/64?cb=20200705032001',
  },
  {
    id: 8,
    name: '海葵',
    eng_name: 'sea anemone',
    jap_name: 'イソギンチャク',
    price: 500,
    shape: 3,
    speed: 1,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b4/NH-Icon-seaanemone.png/revision/latest/scale-to-width-down/64?cb=20200705031052',
  },
  {
    id: 9,
    name: '海月水母',
    eng_name: 'moon jellyfish',
    jap_name: 'ミズクラゲ',
    price: 600,
    shape: 1,
    speed: 2,
    month_n: [7, 8, 9],
    month_s: [1, 2, 3],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b2/NH-Icon-moonjellyfish.png/revision/latest/scale-to-width-down/64?cb=20200704041516',
  },
  {
    id: 10,
    name: '海蛞蝓',
    eng_name: 'sea slug',
    jap_name: 'ウミウシ',
    price: 600,
    shape: 1,
    speed: 2,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d4/NH-Icon-seaslug.png/revision/latest/scale-to-width-down/64?cb=20200705031105',
  },
  {
    id: 11,
    name: '马氏珠母贝',
    eng_name: 'pearl oyster',
    jap_name: 'アコヤガイ',
    price: 2800,
    shape: 1,
    speed: 4,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d8/NH-Icon-pearloyster.png/revision/latest/scale-to-width-down/64?cb=20200705031119',
  },
  {
    id: 12,
    name: '贻贝',
    eng_name: 'mussel',
    jap_name: 'ムールガイ',
    price: 1500,
    shape: 1,
    speed: 3,
    month_n: [6, 7, 8, 9, 10, 11, 12],
    month_s: [1, 2, 3, 4, 5, 6, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/4/49/NH-Icon-mussel.png/revision/latest/scale-to-width-down/64?cb=20200705031258',
  },
  {
    id: 13,
    name: '牡蛎',
    eng_name: 'oyster',
    jap_name: 'オイスター',
    price: 1100,
    shape: 1,
    speed: 3,
    month_n: [1, 2, 9, 10, 11, 12],
    month_s: [3, 4, 5, 6, 7, 8],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a1/NH-Icon-oyster.png/revision/latest/scale-to-width-down/64?cb=20200705031323',
  },
  {
    id: 14,
    name: '虾夷扇贝',
    eng_name: 'scallop',
    jap_name: 'ホタテ',
    price: 1200,
    shape: 2,
    speed: 3,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7e/NH-Icon-scallop.png/revision/latest/scale-to-width-down/64?cb=20200705031310',
  },
  {
    id: 15,
    name: '花螺',
    eng_name: 'whelk',
    jap_name: 'バイガイ',
    price: 1000,
    shape: 1,
    speed: 3,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/5/51/NH-Icon-whelk.png/revision/latest/scale-to-width-down/64?cb=20200704041534',
  },
  {
    id: 16,
    name: '角蝾螺',
    eng_name: 'turban shell',
    jap_name: 'サザエ',
    price: 1000,
    shape: 1,
    speed: 3,
    month_n: [3, 4, 5, 9, 10, 11, 12],
    month_s: [3, 4, 5, 6, 9, 10, 11],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/NH-Icon-turbanshell.png/revision/latest/scale-to-width-down/64?cb=20200705031350',
  },
  {
    id: 17,
    name: '鲍鱼',
    eng_name: 'abalone',
    jap_name: 'アワビ',
    price: 2000,
    shape: 2,
    speed: 4,
    month_n: [1, 6, 7, 8, 9, 10, 11, 12],
    month_s: [1, 2, 3, 4, 5, 6, 7, 12],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f1/NH-Icon-abalone.png/revision/latest/scale-to-width-down/64?cb=20200705031438',
  },
  {
    id: 18,
    name: '大砗磲',
    eng_name: 'gigas giant clam',
    jap_name: 'オオシャコガイ',
    price: 15000,
    shape: 4,
    speed: 6,
    month_n: [5, 6, 7, 8, 9],
    month_s: [1, 2, 3, 11, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/0/09/NH-Icon-gigasgiantclam.png/revision/latest/scale-to-width-down/64?cb=20200704040822',
  },
  {
    id: 19,
    name: '鹦鹉螺',
    eng_name: 'chambered nautilus',
    jap_name: 'オウムガイ',
    price: 1800,
    shape: 2,
    speed: 4,
    month_n: [3, 4, 5, 6, 9, 10, 11],
    month_s: [3, 4, 5, 9, 10, 11, 12],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-chamberednautilus.png/revision/latest/scale-to-width-down/64?cb=20200705031407',
  },
  {
    id: 20,
    name: '章鱼',
    eng_name: 'octopus',
    jap_name: 'タコ',
    price: 1200,
    shape: 2,
    speed: 3,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4e/NH-Icon-octopus.png/revision/latest/scale-to-width-down/64?cb=20200705031421',
  },
  {
    id: 21,
    name: '扁面蛸',
    eng_name: 'umbrella octopus',
    jap_name: 'メンダコ',
    price: 6000,
    shape: 1,
    speed: 5,
    month_n: [3, 4, 5, 9, 10, 11],
    month_s: [3, 4, 5, 9, 10, 11],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-umbrellaoctopus.png/revision/latest/scale-to-width-down/64?cb=20200705031450',
  },
  {
    id: 22,
    name: '吸血鬼乌贼',
    eng_name: 'vampire squid',
    jap_name: 'コウモリダコ',
    price: 10000,
    shape: 2,
    speed: 6,
    month_n: [5, 6, 7, 8],
    month_s: [1, 2, 11, 12],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/1/13/NH-Icon-vampiresquid.png/revision/latest/scale-to-width-down/64?cb=20200705032011',
  },
  {
    id: 23,
    name: '萤火鱿',
    eng_name: 'firefly squid',
    jap_name: 'ホタルイカ',
    price: 1400,
    shape: 1,
    speed: 3,
    month_n: [3, 4, 5, 6],
    month_s: [9, 10, 11, 12],
    time: 5,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/8/85/NH-Icon-fireflysquid.png/revision/latest/scale-to-width-down/64?cb=20200705031756',
  },
  {
    id: 24,
    name: '梭子蟹',
    eng_name: 'gazami crab',
    jap_name: 'ガザミ',
    price: 2200,
    shape: 2,
    speed: 4,
    month_n: [6, 7, 8, 9, 10, 11],
    month_s: [1, 2, 3, 4, 5, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Icon-gazamicrab.png/revision/latest/scale-to-width-down/64?cb=20200705031852',
  },
  {
    id: 25,
    name: '珍宝蟹',
    eng_name: 'dungeness crab',
    jap_name: 'ダンジネスクラブ',
    price: 1900,
    shape: 2,
    speed: 4,
    month_n: [1, 2, 3, 4, 5, 11, 12],
    month_s: [5, 6, 7, 8, 9, 10, 11],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7e/NH-Icon-dungenesscrab.png/revision/latest/scale-to-width-down/64?cb=20200705031712',
  },
  {
    id: 26,
    name: '松叶蟹',
    eng_name: 'snow crab',
    jap_name: 'ズワイガニ',
    price: 6000,
    shape: 3,
    speed: 5,
    month_n: [1, 2, 3, 4, 11, 12],
    month_s: [5, 6, 7, 8, 9, 10],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/6/69/NH-Icon-snowcrab.png/revision/latest/scale-to-width-down/64?cb=20200705031650',
  },
  {
    id: 27,
    name: '帝王蟹',
    eng_name: 'red king crab',
    jap_name: 'タラバガニ',
    price: 8000,
    shape: 3,
    speed: 6,
    month_n: [1, 2, 3, 11, 12],
    month_s: [5, 6, 7, 8, 9],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-redkingcrab.png/revision/latest/scale-to-width-down/64?cb=20200705032051',
  },
  {
    id: 28,
    name: '藤壶',
    eng_name: 'acorn barnacle',
    jap_name: 'フジツボ',
    price: 600,
    shape: 1,
    speed: 1,
    month_n: [],
    month_s: [],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-acornbarnacle.png/revision/latest/scale-to-width-down/64?cb=20200705031838',
  },
  {
    id: 29,
    name: '高脚蟹',
    eng_name: 'spider crab',
    jap_name: 'タカアシガニ',
    price: 12000,
    shape: 4,
    speed: 6,
    month_n: [3, 4],
    month_s: [9, 10],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d5/NH-Icon-spidercrab.png/revision/latest/scale-to-width-down/64?cb=20200705031809',
  },
  {
    id: 30,
    name: '日本对虾',
    eng_name: 'tiger prawn',
    jap_name: 'クルマエビ',
    price: 3000,
    shape: 1,
    speed: 4,
    month_n: [6, 7, 8, 9],
    month_s: [1, 2, 3, 12],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-tigerprawn.png/revision/latest/scale-to-width-down/64?cb=20200705032036',
  },
  {
    id: 31,
    name: '甜虾',
    eng_name: 'sweet shrimp',
    jap_name: 'アマエビ',
    price: 1400,
    shape: 1,
    speed: 3,
    month_n: [1, 2, 9, 10, 11, 12],
    month_s: [3, 4, 5, 6, 7, 8],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Icon-sweetshrimp.png/revision/latest/scale-to-width-down/64?cb=20200705031538',
  },
  {
    id: 32,
    name: '虾蛄',
    eng_name: 'mantis shrimp',
    jap_name: 'シャコ',
    price: 2500,
    shape: 1,
    speed: 4,
    month_n: [],
    month_s: [],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Icon-mantisshrimp.png/revision/latest/scale-to-width-down/64?cb=20200705031823',
  },
  {
    id: 33,
    name: '伊势龙虾',
    eng_name: 'spiny lobster',
    jap_name: 'イセエビ',
    price: 5000,
    shape: 3,
    speed: 5,
    month_n: [10, 11, 12],
    month_s: [4, 5, 6],
    time: 5,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/7/72/NH-Icon-spinylobster.png/revision/latest/scale-to-width-down/64?cb=20200704041014',
  },
  {
    id: 34,
    name: '龙虾',
    eng_name: 'lobster',
    jap_name: 'ロブスター',
    price: 4500,
    shape: 3,
    speed: 5,
    month_n: [1, 4, 5, 6, 12],
    month_s: [6, 7, 10, 11, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/b/bc/NH-Icon-lobster.png/revision/latest/scale-to-width-down/64?cb=20200704041035',
  },
  {
    id: 35,
    name: '大王具足虫',
    eng_name: 'giant isopod',
    jap_name: 'ダイオウグソクムシ',
    price: 12000,
    shape: 2,
    speed: 6,
    month_n: [7, 8, 9, 10],
    month_s: [1, 2, 3, 4],
    time: 6,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/1/19/NH-Icon-giantisopod.png/revision/latest/scale-to-width-down/64?cb=20200704041055',
  },
  {
    id: 36,
    name: '鲎',
    eng_name: 'horseshoe crab',
    jap_name: 'カブトガニ',
    price: 2500,
    shape: 2,
    speed: 4,
    month_n: [7, 8, 9],
    month_s: [1, 2, 3],
    time: 5,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d4/NH-Icon-horseshoecrab.png/revision/latest/scale-to-width-down/64?cb=20200705032022',
  },
  {
    id: 37,
    name: '海鞘',
    eng_name: 'sea pineapple',
    jap_name: 'ホヤ',
    price: 1500,
    shape: 1,
    speed: 3,
    month_n: [4, 5, 6, 7, 8],
    month_s: [1, 2, 10, 11, 12],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/7/79/NH-Icon-seapineapple.png/revision/latest/scale-to-width-down/64?cb=20200704041211',
  },
  {
    id: 38,
    name: '花园鳗',
    eng_name: 'spotted garden eel',
    jap_name: 'チンアナゴ',
    price: 1100,
    shape: 1,
    speed: 3,
    month_n: [5, 6, 7, 8, 9, 10],
    month_s: [1, 2, 3, 4, 11, 12],
    time: 4,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/1/19/NH-Icon-spottedgardeneel.png/revision/latest/scale-to-width-down/64?cb=20200704041433',
  },
  {
    id: 39,
    name: '海扁虫',
    eng_name: 'flatworm',
    jap_name: 'ヒラムシ',
    price: 700,
    shape: 1,
    speed: 2,
    month_n: [8, 9],
    month_s: [2, 3],
    time: 3,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a3/NH-Icon-flatworm.png/revision/latest/scale-to-width-down/64?cb=20200704041314',
  },
  {
    id: 40,
    name: '偕老同穴',
    eng_name: `venus' flower basket`,
    jap_name: 'カイロウドウケツ',
    price: 5000,
    shape: 2,
    speed: 5,
    month_n: [1, 2, 10, 11, 12],
    month_s: [4, 5, 6, 7, 8],
    time: 1,
    img:
      'https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-venusflowerbasket.png/revision/latest/scale-to-width-down/64?cb=20200704041357',
  },
];

export default config;
