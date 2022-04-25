const config = require("../config");

const user = (req, res) => {
  try {
    res.status(200).json({
      name: "Patricia",
      edat: "25",
      url: `http://localhost:${config.port}/user`,
    });
  } catch (error) {
    res.status(500).json({ message: `Error` });
  }
};

module.exports = { user };
