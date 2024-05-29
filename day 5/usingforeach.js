var resume = {
  firstname: "Jijin ",
  lastname: "J",
  age: 24,
  bloodgroup: "o+ive",
  emailid: "jijinjose7598@gmail.com",
  phone: 7598987467,
  school: "M.G.M.S Kirathoor",
  institute: "st.judes college thoothoor",
  studytype: "B.A english literature",
  ismarried: false,
};

Object.keys(resume).forEach(function (key) {
  var value = resume[key];
  console.log(key + ": " + value);
});
