const Auth = require("../modal/auth");

const SignUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const AuthData = new Auth({
      email,
      password,
    });

    const result = await AuthData.save();
    return res.status(201).json({
      status: true,
      message: "Account Created Successfuly",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: false, error: "User not found" });
    } else if (user.email !== email) {
      return res.status(401).json({ status: false, error: "Invalid email " });
    } else if (user.password !== password) {
      return res.status(401).json({ status: false, error: "Invalid password" });
    }

    return res.status(200).json({
      status: true,
      message: "Login Successfuly",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

module.exports = {
  SignUp,
  Login,
};
