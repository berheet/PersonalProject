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
    .then(response => {
      req.session.user = response[0];
      res.status(200).json(response[0]);
    });
};

const addTestimonial = (req, res) => {
  const dbInstance = req.app.get("db");
  console.log(req);
  const { name, rating, message } = req.body;
  dbInstance
    .addTestimonial([name, rating, message])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getTestimonial = (req, res) => {
  
}

module.exports = {
  getUser,
  logout,
  updateProfile,
  addTestimonial,
  getTestimonial
};
