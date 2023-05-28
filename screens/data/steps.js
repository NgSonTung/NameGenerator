export default [
  {
    id: "1",
    title: "Explore Name Categories",
    choices: [
      {
        title: "Baby Names",
        background: require("../../assets/greenBG.jpg"),
        input: "bool",
        key: "category",
        value: "baby names",
      },

      {
        title: "Pet Names",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "category",
        value: "pet names",
      },
      {
        title: "Character Names",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "category",
        value: "character names",
      },
      {
        title: "Business Name",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "category",
        value: "business names",
      },
    ],
  },
  {
    id: "2",
    title: "Pick Your Name Style",
    choices: [
      {
        title: "Royal",
        background: require("../../assets/greenBG.jpg"),
        input: "bool",
        key: "style",
        value: "royal",
      },

      {
        title: "Traditional",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "style",
        value: "traditional",
      },
      {
        title: "Modern",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "style",
        value: "modern",
      },
      {
        title: "Vintage",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "style",
        value: "vintage",
      },
      {
        title: "Fantasy",
        background: require("../../assets/redBG.jpg"),
        input: "bool",
        key: "style",
        value: "fantasy",
      },
    ],
  },
  {
    id: "3",
    title: "Customize Your Name",
    choices: [
      {
        title: "Starting With",
        background: require("../../assets/redBG.jpg"),
        input: "string",
        key: "startsWith",
      },
      {
        title: "Ending With",
        background: require("../../assets/redBG.jpg"),
        input: "string",
        key: "endsWith",
      },
      {
        title: "Syllable Count",
        background: require("../../assets/redBG.jpg"),
        input: "number",
        key: "sCount",
      },
      {
        title: "Word Count",
        background: require("../../assets/redBG.jpg"),
        input: "number",
        key: "wCount",
      },
      {
        title: "Including",
        background: require("../../assets/redBG.jpg"),
        input: "string",
        key: "includes",
      },

      {
        title: "Excluding",
        background: require("../../assets/redBG.jpg"),
        input: "string",
        key: "excludes",
      },
    ],
  },
];
