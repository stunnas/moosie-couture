export interface Product {
  name: string;
  variants?: Variant[];
  minPrice: number;
  maxPrice?: number;
  imageUrl: string;
  etsyUrl: string;
  type: "Drinkware" | "Stickers" | "Keychains";
}

interface Variant {
  type: "Size" | "Color" | "Style" | "Font" | "Personalization" | "Drinkware";
  options: string[];
}

// Create an array of products
const products: Product[] = [
  {
    name: "Capybara Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/8288e3/5933658545/il_1588xN.5933658545_evus.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1706285995/capybara-mugcute-capybara-giftgift-for?click_key=48bbc28d9b2a96c945e9a34d36378c2c93bc897b%3A1706285995&click_sum=2eafc1d7&ref=shop_home_feat_1&sts=1",
    type: "Drinkware",
  },
  {
    name: "Cheetah Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/526756/4365522026/il_1588xN.4365522026_pi8q.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1337358974/cheetah-mugcute-cat-giftgift-for-cat?click_key=ad0c45bd914664c54f3a543f5f8bf90fa9b83cd7%3A1337358974&click_sum=f35b8bb6&ref=shop_home_feat_2&sts=1",
    type: "Drinkware",
  },
  {
    name: "Sloth Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/df62d8/2498577097/il_1588xN.2498577097_14v5.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/537733351/sloth-mug-funny-sloth-mug-animal-lover?click_key=cf51a31459b44f2c565ce2d7949b91a14050ebc3%3A537733351&click_sum=ef44e1c1&ref=shop_home_feat_3&sts=1",
    type: "Drinkware",
  },
  {
    name: "Highland Cow Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/062ff2/5353801291/il_1588xN.5353801291_gulw.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1563845607/highland-cow-mug-highland-cattle-mug-cow?click_key=bac241182655de1cfd50ffc360e32af631f16bb3%3A1563845607&click_sum=2ce59bee&ref=shop_home_feat_4&sts=1",
    type: "Drinkware",
  },
  {
    name: "Capuchin Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/b7d59a/5598545207/il_1588xN.5598545207_so5g.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1607992272/capuchin-mugape-mugprimate-mugmonkey?click_key=27f7acf53c30b6644c64eb6dc62bbbf99ee85efd%3A1607992272&click_sum=a3b8b574&ref=shop_home_active_2&sts=1",
    type: "Drinkware",
  },
  {
    name: "Demogorgon Mug",
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/2e926a/5277564046/il_1588xN.5277564046_fryw.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1563854783/demogorgon-mug-stranger-things-inspired?click_key=1c927b02e95ba76d5a6b554e3651ccf76a848c9f%3A1563854783&click_sum=99d7afa9&ref=shop_home_active_3&sts=1",
    type: "Drinkware",
  },
  {
    name: "Cat Holiday Mug",
    variants: [
      {
        type: "Style",
        options: [
          "Orange Tabby",
          "Black Cat",
          "Grey Tabby",
          "Bicolor",
          "Custom",
        ],
      },
      {
        type: "Drinkware",
        options: [
          "3 oz. espresso mug",
          "11 oz. ceramic mug",
          "15 oz. ceramic mug",
          "20 oz. water bottle",
          "15 oz. travel mug",
          "16 oz. travel mug",
        ],
      },
    ],
    minPrice: 12.0,
    maxPrice: 26.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/9ec477/5325737731/il_1588xN.5325737731_4qzb.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1549668808/cat-holiday-mug-customizable-christmas?click_key=d82108df0c1a4417fef9a119ad4099b51d65ff11%3A1549668808&click_sum=4f8254e1&ref=shop_home_active_4&sts=1",
    type: "Drinkware",
  },
  {
    name: "Chameleon Sticker",
    minPrice: 3.5,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/849eeb/5161610264/il_1588xN.5161610264_rhcx.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1524865948/chameleon-sticker-cute-reptile-sticker?click_key=1bff8bd5823d325ded146740136397d3b1188a18%3A1524865948&click_sum=202bdea8&ref=shop_home_active_7&frs=1&sts=1",
    type: "Stickers",
  },
  {
    name: "Jellyfish Sticker",
    variants: [
      {
        type: "Color",
        options: ["Blue/Purple", "Pink/Orange"],
      },
    ],
    minPrice: 3.5,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/f3a8a5/5161599918/il_1588xN.5161599918_cz3l.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1524864496/jellyfish-sticker-cute-jellyfish-sticker?click_key=b227845483befe8cc5dc12b84b49d69e6c9e8bf8%3A1524864496&click_sum=93f54b13&ref=shop_home_active_8&frs=1&sts=1",
    type: "Stickers",
  },
  {
    name: "Holographic Axolotl Sticker",
    minPrice: 3.5,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/87708a/5209807157/il_1588xN.5209807157_tkwu.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1524859794/holographic-axolotl-sticker-cute-axolotl?click_key=0c10544af3b152822e05b9db3eb2f8e10fa4a966%3A1524859794&click_sum=783526ad&ref=shop_home_active_9&frs=1&sts=1",
    type: "Stickers",
  },
  {
    name: "Holographic Cat Sticker",
    minPrice: 3.5,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/373bd4/5161550634/il_1588xN.5161550634_dczn.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1539032759/holographic-cat-sticker-cute-cat-sticker?click_key=ab0464e5a4dd04bbe7f160954e836715e7a175b7%3A1539032759&click_sum=b385a741&ref=shop_home_active_10&frs=1&sts=1",
    type: "Stickers",
  },
  {
    name: "Octopus Backpack Tag",
    variants: [
      {
        type: "Style",
        options: ["Donut", "Ice Cream"],
      },
      {
        type: "Personalization",
        options: ["Text", "No Text"],
      },
      {
        type: "Color",
        options: [
          "Red",
          "Fuschia",
          "Orange",
          "Yellow",
          "Light Green",
          "Dark Green",
          "Light Blue",
          "Dark Blue",
          "Purple",
          "Gray",
        ],
      },
    ],
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/399264/5209746793/il_1588xN.5209746793_etaz.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1539024225/octopus-backpack-tag-grumpy-octopus?click_key=e5db0b65e3bed92912562a2b115368aeeeeff801%3A1539024225&click_sum=3ca7c8e6&ref=shop_home_active_11&sts=1&variation0=3719745860",
    type: "Keychains",
  },
  {
    name: "Capybara Backpack Tag",
    variants: [
      {
        type: "Personalization",
        options: ["Personalization", "No Personalization"],
      },
      {
        type: "Font",
        options: [
          "Lemon Yellow Sun",
          "Milenneal Solstice",
          "Cookies and Milk",
          "Bernadette",
          "Caveat",
          "Cutie Patootie",
        ],
      },
    ],
    minPrice: 12.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/97d549/5209723723/il_1588xN.5209723723_acp2.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1524842016/capybara-backpack-tag-cute-capybara-gift?click_key=fc334ccc9033a853b3e8a3d149d658d9c761e130%3A1524842016&click_sum=7db0e461&ref=shop_home_active_12&sts=1",
    type: "Keychains",
  },
  {
    name: "Monogrammed Family Christmas Mugs",
    variants: [
      {
        type: "Style",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
      },
    ],
    minPrice: 14.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/b2bac7/5161482928/il_1588xN.5161482928_rl4q.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1524835782/monogrammed-family-christmas-mugs-red?click_key=9674ffafed1df33126c2830577ccc93ea6e2a9b4%3A1524835782&click_sum=6487dc0e&ref=shop_home_active_13&sts=1&variation1=3719710884",
    type: "Drinkware",
  },
  {
    name: "Monogrammed Family Christmas Mugs",
    variants: [
      {
        type: "Style",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
      },
      {
        type: "Personalization",
        options: ["Personalization"],
      },
    ],
    minPrice: 14.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/975143/5161407438/il_1588xN.5161407438_8axa.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1539001989/monogrammed-family-christmas-mugs-red?click_key=d16f05d7d3e390e03e8d01a70bd33f6a39d04ad4%3A1539001989&click_sum=5260e4ca&ref=shop_home_active_14&sts=1&variation1=3719697330",
    type: "Drinkware",
  },
  {
    name: "Beluga Whale Mug",
    variants: [
      {
        type: "Drinkware",
        options: [
          "3 oz. espresso mug",
          "11 oz. ceramic mug",
          "15 oz. ceramic mug",
          "20 oz. water bottle",
          "15 oz. travel mug",
          "16 oz. travel mug",
        ],
      },
    ],
    minPrice: 12.0,
    maxPrice: 22.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/bf72cb/4468703994/il_1588xN.4468703994_2375.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1381212541/beluga-whale-mugcute-whale-mugwhale?click_key=fa9b2ee84a15bdf669cc2146a6efe4fe281ce55f%3A1381212541&click_sum=5afccb32&ref=shop_home_active_15&sts=1",
    type: "Drinkware",
  },
  {
    name: "Tortoise Mug",
    variants: [
      {
        type: "Drinkware",
        options: [
          "3 oz. espresso mug",
          "11 oz. ceramic mug",
          "15 oz. ceramic mug",
          "20 oz. water bottle",
          "15 oz. travel mug",
          "16 oz. travel mug",
        ],
      },
    ],
    minPrice: 12.0,
    maxPrice: 22.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/fae852/4412894203/il_1588xN.4412894203_8har.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1337352234/tortoise-mugturtle-mugfunny-tortoise?click_key=dba1e46d108f6bd6dee8f574b773daf19549b7a0%3A1337352234&click_sum=35126a27&ref=shop_home_recs_19&sts=1",
    type: "Drinkware",
  },
  {
    name: "Pretty Bird Mug",
    variants: [
      {
        type: "Drinkware",
        options: [
          "3 oz. espresso mug",
          "11 oz. ceramic mug",
          "15 oz. ceramic mug",
          "20 oz. water bottle",
          "15 oz. travel mug",
          "16 oz. travel mug",
        ],
      },
      {
        type: "Style",
        options: ["Chickadee", "Titmouse", "Bluebird", "European Robin"],
      },
    ],
    minPrice: 12.0,
    maxPrice: 22.0,
    imageUrl:
      "https://i.etsystatic.com/13467815/r/il/d26f81/4305204359/il_1588xN.4305204359_eotp.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1312577846/pretty-bird-mug-titmouse-mug-chickadee?click_key=04f1df7bd8c21f4c7d372ee84aed69de4f2df01d%3A1312577846&click_sum=e0d6f27f&ga_search_query=pretty%2Bbird&ref=shop_items_search_1&sca=1&sts=1&variation0=2946128748&variation1=2962267731",
    type: "Drinkware",
  },
];

export default products;
