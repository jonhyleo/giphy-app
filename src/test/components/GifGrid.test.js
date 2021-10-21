import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests cases for GifGrid component", () => {
  const category = "Dragon Ball";

  test("should render", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when images are loaded using useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/image.jpg",
        title: "Title",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });
});
