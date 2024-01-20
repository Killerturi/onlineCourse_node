const Home = (req, res) => {
  res.send("home page");
};

const About = (req, res) => {
  res.send("about page");
};

module.exports = {
  Home,
  About,
};
