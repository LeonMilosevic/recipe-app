import React, { useContext, useState } from "react";
// import helpers
import { UserContext } from "../../context/user/UserContext";
import {
  checkboxDiet,
  checkboxHealth,
  checkboxMealType,
  checkboxDishType,
} from "./formHelpers";
// import components
import { Form } from "./Form";

const FormDisplay = () => {
  // what form to display based on boolean
  const [displayCurrentForm, setDisplayCurrentForm] = useState({
    diet: true,
    health: false,
    mealType: false,
    dishType: false,
  });
  // get context to update values for preferences
  const { userPerferances, setUserPerferances } = useContext(UserContext);
  // declare empty arrays to change states of forms
  let tempArrDiet = [...userPerferances.diet];
  let tempArrHealth = [...userPerferances.health];
  let tempArrMealType = [...userPerferances.mealType];
  let tempArrDishType = [...userPerferances.dishType];
  // functions to change and update state
  const handleChangeCheckboxDiet = (e) => {
    if (e.target.checked === true) {
      tempArrDiet.push(e.target.value);
    } else {
      tempArrDiet = tempArrDiet.filter((diet) => diet !== e.target.value);
    }
    setUserPerferances({ ...userPerferances, diet: tempArrDiet });
  };

  const handleChangeCheckboxHealth = (e) => {
    if (e.target.checked === true) {
      tempArrHealth.push(e.target.value);
    } else {
      tempArrHealth = tempArrHealth.filter(
        (health) => health !== e.target.value
      );
    }
    setUserPerferances({ ...userPerferances, health: tempArrHealth });
  };

  const handleChangeCheckboxMealType = (e) => {
    if (e.target.checked === true) {
      tempArrMealType.push(e.target.value);
    } else {
      tempArrMealType = tempArrMealType.filter(
        (mealType) => mealType !== e.target.value
      );
    }
    setUserPerferances({ ...userPerferances, mealType: tempArrMealType });
  };

  const handleChangeCheckboxDishType = (e) => {
    if (e.target.checked === true) {
      tempArrDishType.push(e.target.value);
    } else {
      tempArrDishType = tempArrDishType.filter(
        (dishType) => dishType !== e.target.value
      );
    }
    setUserPerferances({ ...userPerferances, dishType: tempArrDishType });
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

  const handleClickFromDishTypeToNext = (e) => {
    e.preventDefault();
    setDisplayCurrentForm({
      ...displayCurrentForm,
      dishType: false,
    });
    document.querySelector(".form-fullscreen").style.display = "none";
  };

  React.useEffect(() => {
    console.log(userPerferances);
  }, [userPerferances]);

  return (
    <>
      {displayCurrentForm.diet === true ? (
        <Form
          formHeader={"Tell us about your diet"}
          formBody={checkboxDiet(handleChangeCheckboxDiet)}
          handleClickChangeForm={handleClickFromDietToNext}
        />
      ) : displayCurrentForm.health === true ? (
        <Form
          formHeader={"Any alergies?"}
          formBody={checkboxHealth(handleChangeCheckboxHealth)}
          handleClickChangeForm={handleClickFromHealthToNext}
        />
      ) : displayCurrentForm.mealType === true ? (
        <Form
          formHeader={"Tell us about the type of meal"}
          formBody={checkboxMealType(handleChangeCheckboxMealType)}
          handleClickChangeForm={handleClickFromMealTypeToNext}
        />
      ) : (
        <Form
          formHeader={"Tell us about the type of dish"}
          formBody={checkboxDishType(handleChangeCheckboxDishType)}
          handleClickChangeForm={handleClickFromDishTypeToNext}
        />
      )}
    </>
  );
};

export default FormDisplay;
