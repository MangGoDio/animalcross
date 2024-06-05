// type 1 商品 2骆驼 3 diy 4 活动
// lastid 135
const config = [
  {
    id: 1,
    name: 'Nook Inc.地毯',
    eng: 'Nook Inc. rug',
    price: 20000,
    type: 1,
    img: 'RugOtherLeafM00',
  },
  {
    id: 2,
    name: 'Nook Inc.正方形地毯',
    eng: 'Nook Inc. silk rug',
    price: 12000,
    type: 1,
    img: 'RugRectTanukiL00',
  },
  {
    id: 3,
    name: 'Nook Inc.植物图案地毯',
    eng: 'Nook Inc. botanical rug',
    price: 20000,
    type: 1,
    img: 'RugOtherTanukiM00',
  },
  {
    id: 4,
    name: '白色爱心地毯',
    eng: 'White heart rug',
    price: 1500,
    type: 2,
    img: 'RugOtherHeartM03',
  },
  {
    id: 5,
    name: '白色仿木板地毯',
    eng: 'White wooden-deck rug',
    price: 1500,
    type: 2,
    img: 'RugRectDeckM02',
  },
  {
    id: 6,
    name: '白色婚礼地毯',
    eng: 'White wedding rug',
    price: 1500,
    type: 4,
    img: 'RugRectJuneBrideM03',
  },
  {
    id: 7,
    name: '白色简约地垫M',
    eng: 'White simple medium mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM00',
  },
  {
    id: 8,
    name: '白色简约地垫S',
    eng: 'White simple small mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS00',
  },
  {
    id: 9,
    name: '白色玫瑰地毯',
    eng: 'White rose rug',
    price: 1500,
    type: 2,
    img: 'RugOtherRoseM03',
  },
  {
    id: 10,
    name: '白色信息地垫',
    eng: 'White message mat',
    price: 1000,
    type: 2,
    img: 'RugOtherMessageS00',
  },
  { id: 11, name: '贝壳地毯', eng: 'Shell rug', price: 21600, type: 3, img: 'RugOtherShellM00' },
  {
    id: 12,
    name: '彩色塑胶垫',
    eng: 'Colorful vinyl sheet',
    price: 1500,
    type: 2,
    img: 'RugRectVinylM00',
  },
  {
    id: 13,
    name: '茶色厨房地垫',
    eng: 'Brown kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectKitchenS00',
  },
  {
    id: 14,
    name: '茶色仿木板地毯',
    eng: 'Brown wooden-deck rug',
    price: 1500,
    type: 2,
    img: 'RugRectDeckM00',
  },
  {
    id: 15,
    name: '茶色简约地垫M',
    eng: 'Simple medium brown mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM01',
  },
  {
    id: 16,
    name: '茶色简约地垫S',
    eng: 'Simple small brown mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS01',
  },
  {
    id: 17,
    name: '茶色菱格纹地毯',
    eng: 'Brown argyle rug',
    price: 2000,
    type: 2,
    img: 'RugRectArgyleL03',
  },
  {
    id: 18,
    name: '茶色长绒地毯',
    eng: 'Brown shaggy rug',
    price: 2000,
    type: 2,
    img: 'RugSquareShaggyL01',
  },
  {
    id: 19,
    name: '单色波浪地毯',
    eng: 'Monochromatic wavy rug',
    price: 2000,
    type: 2,
    img: 'RugRectWaveL01',
  },
  {
    id: 20,
    name: '单色点点地毯',
    eng: 'Monochromatic dotted rug',
    price: 2000,
    type: 2,
    img: 'RugRectDotL00',
  },
  {
    id: 21,
    name: '单色方块地毯',
    eng: 'Black blocks rug',
    price: 1500,
    type: 2,
    img: 'RugSquareBlockM03',
  },
  { id: 22, name: '地球地毯', eng: 'Earth rug', price: 1500, type: 2, img: 'RugRoundEarthM00' },
  {
    id: 23,
    name: '粉红色爱心地毯',
    eng: 'Pink heart rug',
    price: 1500,
    type: 2,
    img: 'RugOtherHeartM00',
  },
  {
    id: 24,
    name: '粉红色简约浴室地垫',
    eng: 'Simple pink bath mat',
    price: 1000,
    type: 2,
    img: 'RugRectBathmatS02',
  },
  {
    id: 25,
    name: '粉红色玫瑰地毯',
    eng: 'Pink rose rug',
    price: 1500,
    type: 2,
    img: 'RugOtherRoseM00',
  },
  {
    id: 26,
    name: '复古点点地毯',
    eng: 'Retro dotted rug',
    price: 2000,
    type: 2,
    img: 'RugRectDotL01',
  },
  {
    id: 27,
    name: '复活节地毯',
    eng: 'Bunny Day rug',
    price: 9600,
    type: 3,
    img: 'RugOtherEasterM00',
  },
  {
    id: 135,
    name: '海盗地毯',
    eng: 'Pirate rug',
    price: 1500,
    type: 4,
    img: 'RugRectPiratesM00',
  },
  {
    id: 28,
    name: '海军蓝简约浴室地垫',
    eng: 'Simple navy bath mat',
    price: 1000,
    type: 2,
    img: 'RugRectBathmatS01',
  },
  {
    id: 29,
    name: '黑色仿木板地毯',
    eng: 'Black wooden-deck rug',
    price: 1500,
    type: 2,
    img: 'RugRectDeckM03',
  },
  {
    id: 30,
    name: '黑色简约地垫M',
    eng: 'Simple medium black mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM07',
  },
  {
    id: 31,
    name: '黑色简约地垫S',
    eng: 'Simple small black mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS07',
  },
  {
    id: 32,
    name: '黑色图案厨房地垫',
    eng: 'Black-design kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectNativeKitchenS03',
  },
  {
    id: 33,
    name: '红蓝格纹布地毯',
    eng: 'Red-and-blue checked rug',
    price: 2000,
    type: 2,
    img: 'RugSquareCheckQuiltL00',
  },
  {
    id: 34,
    name: '红色波浪地毯',
    eng: 'Red wavy rug',
    price: 2000,
    type: 2,
    img: 'RugRectWaveL03',
  },
  {
    id: 35,
    name: '红色波斯地毯',
    eng: 'Red Persian rug',
    price: 2000,
    type: 2,
    img: 'RugSquarePersianL00',
  },
  { id: 36, name: '红色地毯', eng: 'Red carpet', price: 1500, type: 2, img: 'RugRectElegantM00' },
  {
    id: 37,
    name: '红色点点地毯',
    eng: 'Red dotted rug',
    price: 2000,
    type: 2,
    img: 'RugRectDotL02',
  },
  {
    id: 38,
    name: '红色方块地毯',
    eng: 'Red blocks rug',
    price: 1500,
    type: 2,
    img: 'RugSquareBlockM00',
  },
  {
    id: 39,
    name: '红色婚礼地毯',
    eng: 'Red wedding rug',
    price: 1500,
    type: 4,
    img: 'RugRectJuneBrideM02',
  },
  {
    id: 40,
    name: '红色基里姆地毯',
    eng: 'Red kilim-style carpet',
    price: 2000,
    type: 2,
    img: 'RugSquareKirimL00',
  },
  {
    id: 41,
    name: '红色简约地垫M',
    eng: 'Simple medium red mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM04',
  },
  {
    id: 42,
    name: '红色简约地垫S',
    eng: 'Simple small red mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS04',
  },
  {
    id: 43,
    name: '红色菱格纹地毯',
    eng: 'Red argyle rug',
    price: 2000,
    type: 2,
    img: 'RugRectArgyleL01',
  },
  {
    id: 44,
    name: '红色玫瑰地毯',
    eng: 'Red rose rug',
    price: 1500,
    type: 2,
    img: 'RugOtherRoseM01',
  },
  {
    id: 45,
    name: '红色塑胶垫',
    eng: 'Red vinyl sheet',
    price: 1500,
    type: 2,
    img: 'RugRectVinylM02',
  },
  {
    id: 46,
    name: '红色图案厨房地垫',
    eng: 'Red-design kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectNativeKitchenS00',
  },
  {
    id: 47,
    name: '红色信息地垫 ',
    eng: 'Red message mat',
    price: 1000,
    type: 2,
    img: 'RugOtherMessageS03',
  },
  {
    id: 48,
    name: '红色圆形地垫M',
    eng: 'Red medium round mat',
    price: 1500,
    type: 2,
    img: 'RugRoundSimpleM01',
  },
  {
    id: 49,
    name: '红色圆形地垫S',
    eng: 'Red small round mat',
    price: 1000,
    type: 2,
    img: 'RugRoundSimpleS01',
  },
  { id: 50, name: '化石地毯', eng: 'Fossil rug', price: 1500, type: 2, img: 'RugOtherFossilM00' },
  {
    id: 51,
    name: '黄色波斯地毯',
    eng: 'Yellow Persian rug',
    price: 2000,
    type: 2,
    img: 'RugSquarePersianL02',
  },
  {
    id: 52,
    name: '黄色厨房地垫',
    eng: 'Yellow kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectKitchenS01',
  },
  {
    id: 53,
    name: '黄色粗条纹地毯',
    eng: 'Yellow stripes rug',
    price: 2000,
    type: 2,
    img: 'RugRectBorderL00',
  },
  {
    id: 54,
    name: '黄色方块地毯',
    eng: 'Yellow blocks rug',
    price: 1500,
    type: 2,
    img: 'RugSquareBlockM02',
  },
  {
    id: 55,
    name: '黄色格纹布地毯',
    eng: 'Yellow checked rug',
    price: 2000,
    type: 2,
    img: 'RugSquareCheckQuiltL01',
  },
  {
    id: 56,
    name: '黄色基里姆地毯',
    eng: 'Yellow kilim-style carpet',
    price: 2000,
    type: 2,
    img: 'RugSquareKirimL03',
  },
  {
    id: 57,
    name: '黄色菱格纹地毯',
    eng: 'Yellow argyle rug',
    price: 2000,
    type: 2,
    img: 'RugRectArgyleL00',
  },
  {
    id: 58,
    name: '黄色玫瑰地毯',
    eng: 'Yellow rose rug',
    price: 1500,
    type: 2,
    img: 'RugOtherRoseM02',
  },
  {
    id: 59,
    name: '黄色塑胶垫',
    eng: 'Yellow vinyl sheet',
    price: 1500,
    type: 2,
    img: 'RugRectVinylM03',
  },
  {
    id: 60,
    name: '黄色图案厨房地垫',
    eng: 'Yellow-design kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectNativeKitchenS02',
  },
  {
    id: 61,
    name: '黄色信息地垫',
    eng: 'Yellow message mat',
    price: 1000,
    type: 2,
    img: 'RugOtherMessageS02',
  },
  {
    id: 62,
    name: '黄色圆形地垫M',
    eng: 'Yellow medium round mat',
    price: 1500,
    type: 2,
    img: 'RugRoundSimpleM03',
  },
  {
    id: 63,
    name: '黄色圆形地垫S',
    eng: 'Yellow small round mat',
    price: 1000,
    type: 2,
    img: 'RugRoundSimpleS03',
  },
  {
    id: 64,
    name: '活力妈妈的厨房地垫',
    eng: "Mom's lively kitchen mat",
    price: 352,
    type: 4,
    img: 'RugRectMomS02',
  },
  { id: 65, name: '坚硬地垫', eng: 'Rough rug', price: 1000, type: 2, img: 'RugRectDoormatS00' },
  {
    id: 66,
    name: '橘色简约地垫M',
    eng: 'Simple medium orange mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM05',
  },
  {
    id: 67,
    name: '橘色简约地垫S',
    eng: 'Simple small orange mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS05',
  },
  { id: 68, name: '橘子地毯', eng: 'Orange rug', price: 4800, type: 3, img: 'RugOtherOrangeM00' },
  {
    id: 69,
    name: '卡其色简约地垫M',
    eng: 'Simple medium avocado mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM03',
  },
  {
    id: 70,
    name: '卡其色简约地垫S',
    eng: 'Simple small avocado mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS03',
  },
  {
    id: 71,
    name: '可靠妈妈的厨房地垫',
    eng: "Mom's reliable kitchen mat",
    price: 352,
    type: 4,
    img: 'RugRectMomS03',
  },
  {
    id: 72,
    name: '酷感妈妈的厨房地垫',
    eng: "Mom's cool kitchen mat",
    price: 352,
    type: 4,
    img: 'RugRectMomS00',
  },
  { id: 73, name: '邋遢地毯', eng: 'Sloppy rug', price: 2000, type: 2, img: 'RugOtherSloppyL00' },
  {
    id: 74,
    name: '蓝色爱心地毯',
    eng: 'Turquoise heart rug',
    price: 1500,
    type: 2,
    img: 'RugOtherHeartM01',
  },
  {
    id: 75,
    name: '蓝色波浪地毯',
    eng: 'Blue wavy rug',
    price: 2000,
    type: 2,
    img: 'RugRectWaveL02',
  },
  {
    id: 76,
    name: '蓝色波斯地毯',
    eng: 'Blue Persian rug',
    price: 2000,
    type: 2,
    img: 'RugSquarePersianL01',
  },
  {
    id: 77,
    name: '蓝色厨房地垫',
    eng: 'Blue kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectKitchenS02',
  },
  {
    id: 78,
    name: '蓝色粗条纹地毯',
    eng: 'Blue stripes rug',
    price: 2000,
    type: 2,
    img: 'RugRectBorderL02',
  },
  {
    id: 79,
    name: '蓝色点点地毯',
    eng: 'Blue dotted rug',
    price: 2000,
    type: 2,
    img: 'RugRectDotL03',
  },
  {
    id: 80,
    name: '蓝色方块地毯',
    eng: 'Blue blocks rug',
    price: 1500,
    type: 2,
    img: 'RugSquareBlockM01',
  },
  // {
  //   id: 81,
  //   name: '蓝色婚礼地毯',
  //   eng: 'Blue wedding rug',
  //   price: 1500,
  //   type: 2,
  //   img: 'RugRectJuneBrideM00',
  // },
  {
    id: 82,
    name: '蓝色基里姆地毯',
    eng: 'Blue kilim-style carpet',
    price: 2000,
    type: 2,
    img: 'RugSquareKirimL01',
  },
  {
    id: 83,
    name: '蓝色简约地垫M',
    eng: 'Simple medium blue mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM02',
  },
  {
    id: 84,
    name: '蓝色简约地垫S',
    eng: 'Simple small blue mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS02',
  },
  {
    id: 85,
    name: '蓝色菱格纹地毯',
    eng: 'Blue argyle rug',
    price: 2000,
    type: 2,
    img: 'RugRectArgyleL02',
  },
  {
    id: 86,
    name: '蓝色塑胶垫',
    eng: 'Blue vinyl sheet',
    price: 1500,
    type: 2,
    img: 'RugRectVinylM01',
  },
  {
    id: 87,
    name: '蓝色图案厨房地垫',
    eng: 'Blue-design kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectNativeKitchenS01',
  },
  {
    id: 88,
    name: '蓝色信息地垫',
    eng: 'Blue message mat',
    price: 1000,
    type: 2,
    img: 'RugOtherMessageS01',
  },
  {
    id: 89,
    name: '蓝色圆形地垫M',
    eng: 'Blue medium round mat',
    price: 1500,
    type: 2,
    img: 'RugRoundSimpleM02',
  },
  {
    id: 90,
    name: '蓝色圆形地垫S',
    eng: 'Blue small round mat',
    price: 1000,
    type: 2,
    img: 'RugRoundSimpleS02',
  },
  {
    id: 91,
    name: '蓝色长绒地毯',
    eng: 'Blue shaggy rug',
    price: 2000,
    type: 2,
    img: 'RugSquareShaggyL02',
  },
  {
    id: 92,
    name: '老旧草席',
    eng: 'Shanty mat',
    price: 2000,
    type: 2,
    img: 'RugSquareOldStrawL00',
  },
  { id: 93, name: '蕾丝地毯', eng: 'Lacy rug', price: 1500, type: 2, img: 'RugRoundLaceM00' },
  { id: 94, name: '梨子地毯', eng: 'Pear rug', price: 4800, type: 3, img: 'RugOtherPearM00' },
  {
    id: 95,
    name: '铃钱袋地毯',
    eng: 'Bell-bag rug',
    price: 24000,
    type: 4,
    img: 'RugOtherBellM00',
  },
  {
    id: 96,
    name: '铝制地毯',
    eng: 'Aluminum rug',
    price: 1500,
    type: 2,
    img: 'RugRectAluminumM00',
  },
  {
    id: 97,
    name: '绿色厨房地垫',
    eng: 'Green kitchen mat',
    price: 1000,
    type: 2,
    img: 'RugRectKitchenS03',
  },
  {
    id: 98,
    name: '绿色粗条纹地毯',
    eng: 'Green stripes rug',
    price: 2000,
    type: 2,
    img: 'RugRectBorderL03',
  },
  {
    id: 99,
    name: '绿色格纹布地毯',
    eng: 'Green checked rug',
    price: 2000,
    type: 2,
    img: 'RugSquareCheckQuiltL03',
  },
  {
    id: 100,
    name: '绿色基里姆地毯',
    eng: 'Green kilim-style carpet',
    price: 2000,
    type: 2,
    img: 'RugSquareKirimL02',
  },
  {
    id: 101,
    name: '绿色简约浴室地垫',
    eng: 'Simple green bath mat',
    price: 1000,
    type: 2,
    img: 'RugRectBathmatS03',
  },
  {
    id: 102,
    name: '绿色长绒地毯',
    eng: 'Green shaggy rug',
    price: 2000,
    type: 2,
    img: 'RugSquareShaggyL00',
  },
  {
    id: 103,
    name: '摩登波浪地毯',
    eng: 'Modern wavy rug',
    price: 2000,
    type: 2,
    img: 'RugRectWaveL00',
  },
  { id: 104, name: '蘑菇地毯', eng: 'Mush rug', price: 1500, type: 2, img: 'RugOtherMushM00' },
  {
    id: 105,
    name: '魔法阵地毯',
    eng: 'Magic-circle rug',
    price: 1500,
    type: 2,
    img: 'RugRoundMagicM00',
  },
  {
    id: 106,
    name: '瓢虫地毯',
    eng: 'Ladybug rug',
    price: 1500,
    type: 4,
    img: 'RugRoundLadybirdM00',
  },
  { id: 107, name: '苹果地毯', eng: 'Apple rug', price: 4800, type: 3, img: 'RugOtherAppleM00' },
  {
    id: 108,
    name: '浅色竹子地垫',
    eng: 'Light bamboo rug',
    price: 9600,
    type: 3,
    img: 'RugRectBambooM00',
  },
  {
    id: 109,
    name: '热带岛屿地毯',
    eng: 'Tropical rug',
    price: 1500,
    type: 2,
    img: 'RugRoundIslandM00',
  },
  {
    id: 134,
    name: '人鱼地毯',
    eng: 'Mermaid rug',
    price: 10360,
    type: 3,
    img: 'RugOtherMermaidM00',
  },
  { id: 110, name: '软软地毯', eng: 'Fluffy rug', price: 1500, type: 2, img: 'RugOtherCloudM00' },
  {
    id: 111,
    name: '深色竹子地垫',
    eng: 'Dark bamboo rug',
    price: 3840,
    type: 3,
    img: 'RugRectBambooM01',
  },
  {
    id: 133,
    name: '水蓝色婚礼地毯',
    eng: 'Blue wedding rug',
    price: 1500,
    type: 4,
    img: 'RugRectJuneBrideM00',
  },
  {
    id: 112,
    name: '桃红色粗条纹地毯',
    eng: 'Peach stripes rug',
    price: 2000,
    type: 2,
    img: 'RugRectBorderL01',
  },
  {
    id: 113,
    name: '桃红色格纹布地毯',
    eng: 'Peach checked rug',
    price: 2000,
    type: 2,
    img: 'RugSquareCheckQuiltL02',
  },
  { id: 114, name: '桃子地毯', eng: 'Peach rug', price: 4800, type: 3, img: 'RugOtherPeachM00' },
  {
    id: 115,
    name: '天真妈妈的厨房地垫',
    eng: "Mom's playful kitchen mat",
    price: 352,
    type: 4,
    img: 'RugRectMomS01',
  },
  {
    id: 116,
    name: '椭圆形玄关地垫',
    eng: 'Oval entrance mat',
    price: 1000,
    type: 2,
    img: 'RugOtherCountryS00',
  },
  {
    id: 117,
    name: '象牙色简约浴室地垫',
    eng: 'Ivory simple bath mat',
    price: 1000,
    type: 2,
    img: 'RugRectBathmatS00',
  },
  {
    id: 118,
    name: '象牙色圆形地垫M',
    eng: 'Ivory medium round mat',
    price: 1500,
    type: 2,
    img: 'RugRoundSimpleM00',
  },
  {
    id: 119,
    name: '象牙色圆形地垫S',
    eng: 'Ivory small round mat',
    price: 1000,
    type: 2,
    img: 'RugRoundSimpleS00',
  },
  {
    id: 120,
    name: '橡胶除泥地垫',
    eng: 'Rubber mud mat',
    price: 1000,
    type: 2,
    img: 'RugRectRubberScraperS00',
  },
  { id: 121, name: '雪花地毯', eng: 'Snowflake rug', price: 1500, type: 2, img: 'RugRoundSnowM00' },
  { id: 122, name: '一张榻榻米', eng: 'Tatami mat', price: 1500, type: 2, img: 'RugRectTatamiM00' },
  { id: 123, name: '樱桃地毯', eng: 'Cherry rug', price: 4800, type: 3, img: 'RugOtherCherryM00' },
  { id: 124, name: '鱼儿地毯', eng: 'Fish rug', price: 1500, type: 4, img: 'RugOtherFishM00' },
  {
    id: 125,
    name: '植物图案地毯',
    eng: 'Botanical rug',
    price: 2000,
    type: 2,
    img: 'RugRectBotanicalL00',
  },
  {
    id: 126,
    name: '铸铁玄关地垫',
    eng: 'Iron entrance mat',
    price: 1000,
    type: 2,
    img: 'RugRectIronmatS00',
  },
  {
    id: 127,
    name: '紫色爱心地毯',
    eng: 'Purple heart rug',
    price: 1500,
    type: 2,
    img: 'RugOtherHeartM02',
  },
  {
    id: 128,
    name: '紫色波斯地毯',
    eng: 'Purple Persian rug',
    price: 2000,
    type: 2,
    img: 'RugSquarePersianL03',
  },
  {
    id: 129,
    name: '紫色简约地垫M',
    eng: 'Simple medium purple mat',
    price: 1500,
    type: 2,
    img: 'RugSquareSimpleM06',
  },
  {
    id: 130,
    name: '紫色简约地垫S',
    eng: 'Simple small purple mat',
    price: 1000,
    type: 2,
    img: 'RugSquareSimpleS06',
  },
  {
    id: 131,
    name: '紫色长绒地毯',
    eng: 'Purple shaggy rug',
    price: 2000,
    type: 2,
    img: 'RugSquareShaggyL03',
  },
  {
    id: 132,
    name: '自然色仿木板地毯',
    eng: 'Natural wooden-deck rug',
    price: 1500,
    type: 2,
    img: 'RugRectDeckM01',
  },
];

export default config;