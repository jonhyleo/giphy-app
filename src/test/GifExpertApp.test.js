import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test on GifExpertApp", () => {
  test("should render component properly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a categories list", () => {
    const categories = ["Dragon Ball", "One Punch"];
    const wrapper = shallow(<GifExpertApp categories={categories} />);

    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
