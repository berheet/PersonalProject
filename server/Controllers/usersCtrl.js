const getUser = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "Not Logged In!" });
  } else if (!req.session.user) {
    req.session.user = req.user;
    res.status(200).json(req.session.user);
  } else {
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
    .then(response => {
      req.session.user = response[0];
      res.status(200).json(response[0]);
    });
};

const addTestimonial = (req, res) => {
  const dbInstance = req.app.get("db");
  const { name, rating, message, image } = req.body;
  dbInstance
    .addTestimonial([name, rating, message, image])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getTestimonial = (req, res) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .getTestimonial()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      err.status(500).json(err);
    });
};

const deleteProfile = (req, res) => {
  console.log("Controller:" + req.params.id);
  const dbInstance = req.app.get("db");
  dbInstance
    .deleteProfile([req.params.id])
    .then(response => {
      req.session.destroy() && res.status(200).json("Deleted!");
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  getUser,
  logout,
  updateProfile,
  addTestimonial,
  getTestimonial,
  deleteProfile
};
