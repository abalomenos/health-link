import {male, female} from "./healthObjects";

const helper = {
    calculateBMI: (height, weight) => {
        return (parseInt(weight) / (height*height)) * 703;
    },
    calculateWaterGoal: weight => {
        return parseInt(weight) / 16;
    },
    calculateCalorieRec: (weight, height, age, gender, activity) => {
        let male_BMR = male.BMR(weight, height, age);
        let female_BMR = female.BMR(weight, height, age);

        //Sedentary
        if (gender === "Male" && activity === "Sedentary") {
        return male.noActivity(male_BMR);
        } else if (gender === "Female" && activity === "Sedentary") {
        return female.noActivity(female_BMR);
        }
        //Light Activity
        else if (gender === "Male" && activity === "Light") {
        return male.lightActivity(male_BMR);
        } else if (gender === "Female" && activity === "Light") {
        return female.lightActivity(female_BMR);
        }
        //Moderate Activity
        else if (gender === "Male" && activity === "Moderate") {
        return male.moderateActivity(male_BMR);
        } else if (gender === "Female" && activity === "Moderate") {
        return female.moderateActivity(female_BMR);
        }
        //Very Active
        else if (gender === "Male" && activity === "Very Active") {
        return male.veryActive(male_BMR);
        } else if (gender === "Female" && activity === "Very Active") {
        return female.veryActive(female_BMR);
        }
        //Extremely Active
        else if (gender === "Male" && activity === "Extremely Active") {
        return male.extremelyActive(male_BMR);
        } else if (
        gender === "Female" &&
        activity === "Extremely Active"
        ) {
        return female.extremelyActive(female_BMR);
        }
    }
};

export default helper;