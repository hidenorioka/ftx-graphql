const Users = [
  {
    id: 1,
    name: "Hidenori Oka",
    email: "hidenori.oka@com",
    posts: [
      {
        id: 1,
        title: "Debugging an Ionic Android App Using Chrome Dev Tools",
        published: true,
        link:
          "https://www.yahoo.co.jp/",
        author: 1
      },
      {
        id: 2,
        title: "Hosting a Laravel Application on Azure Web App",
        published: false,
        author: 1
      }
     ]
  },
  {
    id: 3,
    name: "Taro Sample",
    email: "sample@com",
    posts: []
  }
];


module.exports = {
  Users
};
