import faker from "faker";
import niceColors from "nice-color-palettes";

faker.seed(1);

const colors = [
  ...niceColors[24
  ].slice(0, niceColors[1].length),
  niceColors[55].slice(0, 3),
];
console.log(colors);

export const Images = [
  {
    image: "https://image.flaticon.com/icons/png/256/435/435034.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435063.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435068.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435056.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435043.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435055.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435053.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435066.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435086.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435044.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435065.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435041.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435042.png",
  },
  {
    image: "https://image.flaticon.com/icons/png/256/435/435040.png",
  },
];

export const detailsIcons = [
  {
    color: "#9FD7F1",
    icon: "isv",
  },
  {
    color: "#F3B000",
    icon: "Trophy",
  },
  {
    color: "#F2988F",
    icon: "edit",
  },
];

export default Images.map((item, i) => ({
  ...item,
  key: faker.random.uuid(),
  color: colors[i % colors.length],
  name: faker.name.findName(),
  jobTitle: faker.name.jobTitle(),
  categories: [...Array(3).keys()].map(() => {
    return {
      key: faker.random.uuid(),
      title: faker.name.jobType(),
      subcats: [...Array(3).keys()].map(faker.name.jobType),
    };
  }),
}));
