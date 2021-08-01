const UserController = class {
  handleLogin = (req, res) => res.send("Login");
  handleLogout = (req, res) => res.send("Logout");
  handleRegister = (req, res) =>
    res.status(201).send({ msg: "Successfully Registered." });
};

const userController = new UserController();

export default userController;
