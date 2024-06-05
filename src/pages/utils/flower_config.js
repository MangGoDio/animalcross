// 玫瑰
const rose = [
  {
    father: [{ gene: 'RRyyWWSs', type: '种子', color: 'red' }],
    childs: [
      { gene: 'RRyyWWSS', color: 'pink', pure: true, percent: 25 },
      { gene: 'RRyyWWss', color: 'black', pure: true, percent: 25 },
    ],
  },
  {
    father: [{ gene: 'rryyWwss', type: '种子', color: 'white' }],
    childs: [{ gene: 'rryywwss', color: 'purple', pure: true, percent: 25 }],
  },
  {
    father: [
      { gene: 'RRyyWWSs', type: '种子', color: 'red' },
      { gene: 'rrYYWWss', type: '种子', color: 'yellow' },
    ],
    childs: [{ gene: 'RrYyWWss', color: 'orange', pure: false, percent: 50 }],
  },
  {
    father: [{ gene: 'RRYYWwSs', type: '珍花岛', color: 'orange' }],
    childs: [{ gene: 'RRYYwwss', color: 'blue', pure: true, percent: 6.25 }],
  },
];

// 郁金香
const tulip = [
  {
    father: [{ gene: 'RRyySs', type: '种子', color: 'red' }],
    childs: [{ gene: 'RRyyss', color: 'black', pure: true, percent: 25 }],
  },
  {
    father: [
      { gene: 'RRyySs', type: '种子', color: 'red' },
      { gene: 'rryySs', type: '种子', color: 'white' },
    ],
    childs: [{ gene: 'RryySs', color: 'pink', pure: false, percent: 50 }],
  },
  {
    father: [
      { gene: 'RRyySs', type: '种子', color: 'red' },
      { gene: 'rrYYss', type: '种子', color: 'yellow' },
    ],
    childs: [{ gene: 'RrYyss', color: 'orange', pure: false, percent: 50 }],
  },
  {
    father: [{ gene: 'RRYyss', type: '珍花岛', color: 'black' }],
    childs: [{ gene: 'RRYYss', color: 'purple', pure: true, percent: 25 }],
  },
];

// 菊花
const mum = [
  {
    father: [
      { gene: 'RRyyWW', type: '种子', color: 'red' },
      { gene: 'rryyWw', type: '种子', color: 'white' },
    ],
    childs: [
      { gene: 'RryyWW', color: 'pink', pure: false, percent: 25 },
      { gene: 'RryyWw', color: 'pink', pure: false, percent: 50 },
    ],
  },
  {
    father: [{ gene: 'rryyWw', type: '种子', color: 'white' }],
    childs: [{ gene: 'rryyww', color: 'purple', pure: true, percent: 25 }],
  },
  {
    father: [{ gene: 'RRYyWw', type: '珍花岛', color: 'purple' }],
    childs: [
      { gene: 'RRYYWW', color: 'green', pure: true, percent: 6.25 },
      { gene: 'RRYYWw', color: 'green', pure: false, percent: 12.5 },
    ],
  },
];

// 波斯菊
const cosmo = [
  {
    father: [
      { gene: 'RRyyss', type: '种子', color: 'red' },
      { gene: 'rryySs', type: '种子', color: 'white' },
    ],
    childs: [
      { gene: 'RryySs', color: 'pink', pure: false, percent: 50 },
      { gene: 'Rryyss', color: 'pink', pure: false, percent: 50 },
    ],
  },
  {
    father: [
      { gene: 'RRyyss', type: '种子', color: 'red' },
      { gene: 'rrYYSs', type: '种子', color: 'yellow' },
    ],
    childs: [
      { gene: 'RrYrSs', color: 'orange', pure: false, percent: 50 },
      { gene: 'RrYrss', color: 'orange', pure: false, percent: 50 },
    ],
  },
  {
    father: [{ gene: 'RrYrss', type: '一代杂交', color: 'orange' }],
    childs: [{ gene: 'RRYYss', color: 'black', pure: true, percent: 6.25 }],
  },
  {
    father: [{ gene: 'RrYrSs', type: '一代杂交', color: 'orange' }],
    childs: [
      { gene: 'RRYYss', color: 'black', pure: true, percent: 1.56 },
      { gene: 'RRYYSs', color: 'black', pure: false, percent: 3.12 },
    ],
  },
];

// 百合
const lily = [
  {
    father: [{ gene: 'RRyySs', type: '种子', color: 'red' }],
    childs: [
      { gene: 'RRyySS', color: 'pink', pure: true, percent: 25 },
      { gene: 'RRyyss', color: 'black', pure: true, percent: 25 },
    ],
  },
  {
    father: [
      { gene: 'RRyySs', type: '种子', color: 'red' },
      { gene: 'rrYYss', type: '种子', color: 'yellow' },
    ],
    childs: [{ gene: 'RrYyss', color: 'orange', pure: false, percent: 50 }],
  },
];

// 三色堇
const pansy = [
  {
    father: [{ gene: 'rryyWw', type: '种子', color: 'white' }],
    childs: [{ gene: 'rryyww', color: 'blue', pure: true, percent: 25 }],
  },
  {
    father: [
      { gene: 'RRyyWW', type: '种子', color: 'red' },
      { gene: 'rrYYWW', type: '种子', color: 'yellow' },
    ],
    childs: [{ gene: 'RrYyWW', color: 'orange', pure: true, percent: 100 }],
  },
  {
    father: [{ gene: 'Rryyww', type: '珍花岛', color: 'blue' }],
    childs: [{ gene: 'RRyyww', color: 'purple', pure: true, percent: 25 }],
  },
];

// 风信子
const hyacinth = [
  {
    father: [
      { gene: 'RRyyWw', type: '种子', color: 'red' },
      { gene: 'rrYYWW', type: '种子', color: 'yellow' },
    ],
    childs: [{ gene: 'RrYyWW', color: 'orange', pure: false, percent: 50 }],
  },
  {
    father: [
      { gene: 'RRyyWw', type: '种子', color: 'red' },
      { gene: 'rryyWw', type: '种子', color: 'white' },
    ],
    childs: [{ gene: 'RryyWw', color: 'pink', pure: false, percent: 50 }],
  },
  {
    father: [{ gene: 'rryyWw', type: '种子', color: 'white' }],
    childs: [{ gene: 'rryyww', color: 'blue', pure: true, percent: 25 }],
  },
  {
    father: [{ gene: 'RrYYWW', type: '珍花岛', color: 'orange' }],
    childs: [{ gene: 'RRYYWW', color: 'purple', pure: true, percent: 25 }],
  },
];

// 银莲花
const wind = [
  {
    father: [
      { gene: 'RRooWW', type: '种子', color: 'red' },
      { gene: 'rrOOWW', type: '种子', color: 'orange' },
    ],
    childs: [{ gene: 'RrOoWW', color: 'pink', pure: false, percent: 100 }],
  },
  {
    father: [{ gene: 'rrooWw', type: '种子', color: 'white' }],
    childs: [{ gene: 'rrooww', color: 'blue', pure: true, percent: 25 }],
  },
  {
    father: [{ gene: 'Rrooww', type: '珍花岛', color: 'blue' }],
    childs: [{ gene: 'RRooww', color: 'purple', pure: true, percent: 25 }],
  },
];

export default {
  rose,
  tulip,
  mum,
  cosmo,
  lily,
  pansy,
  hyacinth,
  wind,
};
