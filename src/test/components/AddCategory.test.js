import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test on AddCategory component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Component should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Text input should change", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", {
      target: {
        value,
      },
    });
  });

  test("shouldn't post info with submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should post info with submit", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    // Simulate inputChange
    input.simulate("change", {
      target: {
        value,
      },
    });

    // Simulate submit event
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Call setCategories
    expect(setCategories).toHaveBeenCalled();

    // Clear input value
    expect(input.prop("value")).toBe("");
  });
});
