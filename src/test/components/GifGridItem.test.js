import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test for GifGridItem component", () => {
  const title = "Title";
  const url = "https://localhost/image.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("The component must be render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component must have a paragraph", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("Image src and alt must match values provided on props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
