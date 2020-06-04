import React, { useContext, useState } from "react";
// import helpers
import { UserContext } from "../../context/user/UserContext";
import { AuthContext } from "../../context/auth/AuthContext";
import {
  checkboxDiet,
  checkboxHealth,
  checkboxMealType,
  checkboxDishType,
} from "./formHelpers";
// import components
import { Form } from "./Form";
import { firebaseApp } from "../../utils/firebase";
import Dashboard from "./Dashboard";

const FormDisplay = () => {
  // what form to display based on boolean
  const [displayCurrentForm, setDisplayCurrentForm] = useState({
    diet: true,
    health: false,
    mealType: false,
    dishType: false,
  });
  const [checkedValues, setCheckedValues] = useState({
    diet: {
      balanced: false,
      highProtein: false,
      highFiber: false,
      lowFat: false,
      lowCarb: false,
      lowSodium: false,
      noDiet: false,
    },
    health: {
      alchoholFree: false,
      dairyFree: false,
      keto: false,
      sugarFree: false,
      peanutsFree: false,
      vegetarian: false,
      vegan: false,
    },
    mealType: {
      breakfast: false,
      lunch: false,
      dinner: false,
    },
    dishType: {
      souces: false,
      desserts: false,
      mainCourse: false,
      sandwiches: false,
      soup: false,
    },
  });
  // get context to update values for preferences
  const { userPreferences, setUserPreferences } = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);
  // declare empty arrays to change states of forms
  let tempArrDiet = [...userPreferences.diet];
  let tempArrHealth = [...userPreferences.health];
  let tempArrMealType = [...userPreferences.mealType];
  let tempArrDishType = [...userPreferences.dishType];
  // declare empty arrays to change states of checkbox values
  let tempCheckboxDiet = { ...checkedValues.diet };
  let tempCheckboxHealth = { ...checkedValues.health };
  let tempCheckboxMealType = { ...checkedValues.mealType };
  let tempCheckboxDishType = { ...checkedValues.dishType };
  // functions to change and update state
  const handleChangeCheckboxDiet = (e) => {
    if (e.target.checked === true) {
      tempArrDiet.push(e.target.value);
      tempCheckboxDiet = {
        ...tempCheckboxDiet,
        [e.target.name]: e.target.checked,
      };
    } else {
      tempArrDiet = tempArrDiet.filter((diet) => diet !== e.target.value);
      tempCheckboxDiet = {
        ...tempCheckboxDiet,
        [e.target.name]: e.target.checked,
      };
    }
    setUserPreferences({ ...userPreferences, diet: tempArrDiet });
    setCheckedValues({ ...checkedValues, diet: tempCheckboxDiet });
  };

  const handleChangeCheckboxHealth = (e) => {
    if (e.target.checked === true) {
      tempArrHealth.push(e.target.value);
      tempCheckboxHealth = {
        ...tempCheckboxHealth,
        [e.target.name]: e.target.checked,
      };
    } else {
      tempArrHealth = tempArrHealth.filter(
        (health) => health !== e.target.value
      );
      tempCheckboxHealth = {
        ...tempCheckboxHealth,
        [e.target.name]: e.target.checked,
      };
    }
    setUserPreferences({ ...userPreferences, health: tempArrHealth });
    setCheckedValues({ ...checkedValues, health: tempCheckboxHealth });
  };

  const handleChangeCheckboxMealType = (e) => {
    if (e.target.checked === true) {
      tempArrMealType.push(e.target.value);
      tempCheckboxMealType = {
        ...tempCheckboxMealType,
        [e.target.name]: e.target.checked,
      };
    } else {
      tempArrMealType = tempArrMealType.filter(
        (mealType) => mealType !== e.target.value
      );
      tempCheckboxMealType = {
        ...tempCheckboxMealType,
        [e.target.name]: e.target.checked,
      };
    }
    setUserPreferences({ ...userPreferences, mealType: tempArrMealType });
    setCheckedValues({ ...checkedValues, mealType: tempCheckboxMealType });
  };

  const handleChangeCheckboxDishType = (e) => {
    if (e.target.checked === true) {
      tempArrDishType.push(e.target.value);
      tempCheckboxDishType = {
        ...tempCheckboxDishType,
        [e.target.name]: e.target.checked,
      };
    } else {
      tempArrDishType = tempArrDishType.filter(
        (dishType) => dishType !== e.target.value
      );
      tempCheckboxDishType = {
        ...tempCheckboxDishType,
        [e.target.name]: e.target.checked,
      };
    }
    setUserPreferences({ ...userPreferences, dishType: tempArrDishType });
    setCheckedValues({ ...checkedValues, dishType: tempCheckboxDishType });
  };

  // handlechange functions to switch between forms
  const handleClickFromDietToNext = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({ ...displayCurrentForm, diet: false, health: true });
  };

  const handleClickFromHealthToNext = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({
      ...displayCurrentForm,
      health: false,
      mealType: true,
    });
  };

  const handleClickFromMealTypeToNext = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({
      ...displayCurrentForm,
      mealType: false,
      dishType: true,
    });
  };

  const handleClickSubmitForm = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({
      ...displayCurrentForm,
      dishType: false,
    });
    firebaseApp.firestore().collection("preferences").doc(currentUser.uid).set({
      userPreferences,
    });
  };

  return (
    <>
      {displayCurrentForm.diet === true ? (
        <Form
          formHeader={"Tell us about your diet"}
          formBody={checkboxDiet(
            handleChangeCheckboxDiet,
            checkedValues.diet,
            handleClickFromDietToNext
          )}
        />
      ) : displayCurrentForm.health === true ? (
        <Form
          formHeader={"Any alergies?"}
          formBody={checkboxHealth(
            handleChangeCheckboxHealth,
            checkedValues.health,
            handleClickFromHealthToNext
          )}
        />
      ) : displayCurrentForm.mealType === true ? (
        <Form
          formHeader={"Tell us about the type of meal"}
          formBody={checkboxMealType(
            handleChangeCheckboxMealType,
            checkedValues.mealType,
            handleClickFromMealTypeToNext
          )}
        />
      ) : displayCurrentForm.dishType === true ? (
        <Form
          formHeader={"Tell us about the type of dish"}
          formBody={checkboxDishType(
            handleChangeCheckboxDishType,
            checkedValues.dishType,
            handleClickSubmitForm
          )}
        />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default FormDisplay;
