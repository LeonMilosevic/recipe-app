import React from "react";

export const checkboxDiet = (onChangeFunc) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="balanced"
            value="balanced"
          />
          <span className="form-checkbox-label">Balanced</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="high-protein"
            value="high-protein"
          />
          <span className="form-checkbox-label">High-protein</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="high-fiber"
            value="high-fiber"
          />
          <span className="form-checkbox-label">High-fiber</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="low-fat"
            value="low-fat"
          />
          <span className="form-checkbox-label">Low-fat</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="low-carb"
            value="low-carb"
          />
          <span className="form-checkbox-label">Low-carb</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="low-sodium"
            value="low-sodium"
          />
          <span className="form-checkbox-label">Low-sodium</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="no-diet"
            value="no-diet"
          />
          <span className="form-checkbox-label">No diet</span>
        </label>
      </div>
    </>
  );
};

export const checkboxHealth = (onChangeFunc) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="alchohol-free"
            value="alchohol-free"
          />
          <span className="form-checkbox-label">Alchohol-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="dairy-free"
            value="dairy-free"
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
          />
          <span className="form-checkbox-label">Keto</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="sugar-free"
            value="sugar-free"
          />
          <span className="form-checkbox-label">Sugar-free</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="peanuts-free"
            value="peanuts-free"
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
          />
          <span className="form-checkbox-label">Vegan</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="no-health"
            value="no-health"
          />
          <span className="form-checkbox-label">No Alergies</span>
        </label>
      </div>
    </>
  );
};

export const checkboxMealType = (onChangeFunc) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="breakfast"
            value="breakfast"
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
          />
          <span className="form-checkbox-label">Dinner</span>
        </label>
      </div>
    </>
  );
};

export const checkboxDishType = (onChangeFunc) => {
  return (
    <>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="souces"
            value="souces"
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
          />
          <span className="form-checkbox-label">Dessert</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="Main course"
            value="Main course"
          />
          <span className="form-checkbox-label">Main course</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="Sandwiches"
            value="Sandwiches"
          />
          <span className="form-checkbox-label">Sandwiches</span>
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={onChangeFunc}
            type="checkbox"
            name="Soup"
            value="Soup"
          />
          <span className="form-checkbox-label">Soups</span>
        </label>
      </div>
    </>
  );
};
