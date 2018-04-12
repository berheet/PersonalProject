const getUser = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "Not Logged In!" });
  } else {
    req.session.user = req.user;
    res.status(200).json(req.session.user);
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/");
  });
};

const updateProfile = (req, res) => {
  const dbInstance = req.app.get("db");
  console.log(req);
  const {
    name,
    age,
    gender,
    height,
    currentWeight,
    goalWeight,
    activityLevel,
    goal,
    id
  } = req.body;
  dbInstance
    .updateProfile(
      name,
      age,
      gender,
      height,
      currentWeight,
      goalWeight,
      activityLevel,
      goal,
      id
    )
    .then(response => res.status(200).json({ response }));
};

module.exports = {
  getUser,
  logout,
  updateProfile
};
