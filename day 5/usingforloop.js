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

var keys = Object.keys(resume);


for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = resume[key];
    console.log(key + ": " + value);
};
