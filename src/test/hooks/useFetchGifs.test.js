import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test for useFetchGifs custom hook", () => {
  test("should return a initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Dragon Ball")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an image array and loading state should be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Dragon Ball")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
