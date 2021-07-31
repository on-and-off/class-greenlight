const UserController = class {
  handleLogin = (req, res) => res.send("Login");
  handleLogout = (req, res) => res.send("Logout");
  handleRegister = (req, res) => res.send("Register");
};

const userController = new UserController();

export default userController;
