import React from "react";

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
            name="highFiber"
            value="high-fiber"
            checked={checked.highFiber}
          />
          <span className="form-checkbox-label">High-fiber</span>
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
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="lowSodium"
            value="low-sodium"
            checked={checked.lowSodium}
          />
          <span className="form-checkbox-label">Low-sodium</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="noDiet"
            value="no-diet"
            checked={checked.noDiet}
          />
          <span className="form-checkbox-label">No diet</span>
        </label>
      </div>
      <button onClick={handleClickChangeForm}>Next</button>
    </>
  );
};

export const checkboxHealth = (
  onChangeFunc,
  checked,
  handleClickChangeForm
) => {
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
            name="dairyFree"
            value="dairy-free"
            checked={checked.dairyFree}
          />
          <span className="form-checkbox-label">Dairy-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="keto"
            value="keto"
            checked={checked.keto}
          />
          <span className="form-checkbox-label">Keto</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="sugarFree"
            value="sugar-free"
            checked={checked.sugarFree}
          />
          <span className="form-checkbox-label">Sugar-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="peanutsFree"
            value="peanuts-free"
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
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="noHealth"
            value="no-health"
            checked={checked.noHealth}
          />
          <span className="form-checkbox-label">No Alergies</span>
        </label>
      </div>
      <button onClick={handleClickChangeForm}>Next</button>
    </>
  );
};

export const checkboxMealType = (
  onChangeFunc,
  checked,
  handleClickChangeForm
) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="breakfast"
            value="breakfast"
            checked={checked.breakfast}
          />
          <span className="form-checkbox-label">Breakfast</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="lunch"
            value="lunch"
            checked={checked.lunch}
          />
          <span className="form-checkbox-label">Lunch</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="dinner"
            value="dinner"
            checked={checked.dinner}
          />
          <span className="form-checkbox-label">Dinner</span>
        </label>
      </div>
      <button onClick={handleClickChangeForm}>Next</button>
    </>
  );
};

export const checkboxDishType = (
  onChangeFunc,
  checked,
  handleClickSubmitForm
) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="souces"
            value="souces"
            checked={checked.souces}
          />
          <span className="form-checkbox-label">Souces</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="desserts"
            value="desserts"
            checked={checked.desserts}
          />
          <span className="form-checkbox-label">Dessert</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="mainCourse"
            value="Main course"
            checked={checked.mainCourse}
          />
          <span className="form-checkbox-label">Main course</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="sandwiches"
            value="Sandwiches"
            checked={checked.sandwiches}
          />
          <span className="form-checkbox-label">Sandwiches</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="soup"
            value="Soup"
            checked={checked.soup}
          />
          <span className="form-checkbox-label">Soups</span>
        </label>
      </div>
      <button onClick={handleClickSubmitForm}>submit</button>
    </>
  );
};
