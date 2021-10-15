import { getGifs } from "../../helpers/getGifs";

describe("Tests for getGifs fetch helper", () => {
  test("Should return 10 items", async () => {
    const gifs = await getGifs("Dragon Ball");

    expect(gifs.length).toBe(10);
  });

  test("Should return 0 items if category is empty", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
