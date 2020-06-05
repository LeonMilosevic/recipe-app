import React from "react";
// import images
import chicken from "../../../assets/chicken.jpg";
import egg from "../../../assets/egg.jpg";
import pizza from "../../../assets/pizza.jpg";
import beef from "../../../assets/beef.jpg";
import soup from "../../../assets/soup.jpg";
import bread from "../../../assets/bread.jpg";
import potato from "../../../assets/potato.jpg";
import pasta from "../../../assets/pasta.jpg";
import grain from "../../../assets/grain.jpg";
import dessert from "../../../assets/dessert.jpg";

export const formMain = (onClickFunc) => {
  return (
    <>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={chicken} alt="chicken" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={egg} alt="eggs" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={pizza} alt="pizza" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={beef} alt="beef" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={soup} alt="soup" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={bread} alt="bread" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={potato} alt="potatoes" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={pasta} alt="pasta" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={grain} alt="grains" />
      </div>
      <div className="form-main-image-div" onClick={onClickFunc}>
        <img className="form-main-image" src={dessert} alt="desserts" />
      </div>
    </>
  );
};

export const checkboxDiet = (onChangeFunc, checked, handleClickChangeForm) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="balanced"
            value="balanced"
            checked={checked.balanced}
          />
          <span className="form-checkbox-label">Balanced</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="highProtein"
            value="high-protein"
            checked={checked.highProtein}
          />
          <span className="form-checkbox-label">High-protein</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="lowFat"
            value="low-fat"
            checked={checked.lowFat}
          />
          <span className="form-checkbox-label">Low-fat</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="lowCarb"
            value="low-carb"
            checked={checked.lowCarb}
          />
          <span className="form-checkbox-label">Low-carb</span>
        </label>
      </div>
      <button onClick={handleClickChangeForm}>Next</button>
    </>
  );
};

export const checkboxHealth = (onChangeFunc, checked, handleClickSubmit) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="alchoholFree"
            value="alchohol-free"
            checked={checked.alchoholFree}
          />
          <span className="form-checkbox-label">Alchohol-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="peanutsFree"
            value="peanut-free"
            checked={checked.peanutsFree}
          />
          <span className="form-checkbox-label">Peanuts-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="vegetarian"
            value="vegetarian"
            checked={checked.vegetarian}
          />
          <span className="form-checkbox-label">Vegetarian</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="vegan"
            value="vegan"
            checked={checked.vegan}
          />
          <span className="form-checkbox-label">Vegan</span>
        </label>
      </div>
      <button onClick={handleClickSubmit}>Submit</button>
    </>
  );
};
