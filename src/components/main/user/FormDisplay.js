import React, { useContext, useState } from "react";
// import helpers
import { UserContext } from "../../context/user/UserContext";
import { AuthContext } from "../../context/auth/AuthContext";
import { checkboxDiet, checkboxHealth, formMain } from "./formHelpers";
// import components
import { Form } from "./Form";
import { firebaseApp } from "../../utils/firebase";
import Dashboard from "./Dashboard";

const FormDisplay = () => {
  // what form to display based on boolean
  const [displayCurrentForm, setDisplayCurrentForm] = useState({
    main: true,
    diet: false,
    health: false,
  });
  const [checkedValues, setCheckedValues] = useState({
    diet: {
      balanced: false,
      highProtein: false,
      lowFat: false,
      lowCarb: false,
    },
    health: {
      alchoholFree: false,
      peanutsFree: false,
      vegetarian: false,
      vegan: false,
    },
  });
  // get context to update values for preferences
  const { userPreferences, setUserPreferences } = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);
  // declare empty arrays to change states of forms
  let tempArrDiet = [...userPreferences.diet];
  let tempArrHealth = [...userPreferences.health];
  // declare empty arrays to change states of checkbox values
  let tempCheckboxDiet = { ...checkedValues.diet };
  let tempCheckboxHealth = { ...checkedValues.health };
  // functions to change and update state
  const handleClickMain = (e) => {
    setUserPreferences({ ...userPreferences, main: e.target.alt });
    setDisplayCurrentForm({
      ...displayCurrentForm,
      main: false,
      diet: true,
    });
  };

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

  // handlechange functions to switch between forms

  const handleClickFromDietToNext = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({ ...displayCurrentForm, diet: false, health: true });
  };

  const handleClickSubmitForm = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({
      ...displayCurrentForm,
      health: false,
    });
    firebaseApp.firestore().collection("preferences").doc(currentUser.uid).set({
      userPreferences,
    });
  };

  return (
    <>
      {displayCurrentForm.main === true ? (
        <Form
          formHeader={"Tell us about the type of meal"}
          formBody={formMain(handleClickMain, checkedValues.mealType)}
        />
      ) : displayCurrentForm.diet === true ? (
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
