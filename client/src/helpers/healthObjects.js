module.exports.male = {
    BMI: (weight, height) => {
      var BMI = (weight / (height * height)) * 703;
      this.BMI = BMI;
      return BMI;
    },
    BMR: (weight, height, age) => {
      var BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
      this.BMR = BMR;
      return BMR;
    },
    noActivity: BMR => {
      var sedMale = BMR * 1.2;
      return sedMale;
    },
    lightActivity: BMR => {
      var sedMale = BMR * 1.37;
      return sedMale;
    },
    moderateActivity: BMR => {
      var sedMale = BMR * 1.55;
      return sedMale;
    },
    veryActive: BMR => {
      var sedMale = BMR * 1.725;
      return sedMale;
    },
    extremelyActive: BMR => {
      var sedMale = BMR * 1.9;
      return sedMale;
    },
    IBW: height => {
      if (height > 60){
        var newHeight = height - 60;
        var IBW = 110.2 + (3.5 * newHeight)
      }
      return IBW;
    },
};
module.exports.female = {
    BMI: (weight, height) => {
      var BMI = (weight / (height * height)) * 703;
      this.BMI = BMI;
      return BMI;
    },
    BMR: (weight, height, age) => {
      var BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
      this.BMR = BMR;
      return BMR;
    },
    noActivity: (BMR) => {
      var sedFemale = BMR * 1.2;
      return sedFemale;
    },
    lightActivity: (BMR) => {
      var sedFemale = BMR * 1.37;
      return sedFemale;
    },
    moderateActivity: (BMR) => {
      var sedFemale = BMR * 1.55;
      return sedFemale;
    },
    veryActive: (BMR) => {
      var sedFemale = BMR * 1.725;
      return sedFemale;
    },
    extremelyActive: (BMR) => {
      var sedFemale = BMR * 1.9;
      return sedFemale;
    },
    IBW: (height) => {
      if (height > 60){
        var newHeight = height - 60;
        var IBW = 110.2 + (3.5 * newHeight)
      }
      return IBW;
    },
};