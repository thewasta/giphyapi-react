import {useFetchGifs} from "../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe("Pruebas en custom hook", () => {
    test("debe retornar el estado inicial", async function (assert) {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("dragon"));
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test("debe retornar las imagenes y loading en false", async function (assert) {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("dragon"));
        await waitForNextUpdate();

        const {data, loading} = result.current;
        expect(data.length).toBe(5);
        expect(loading).toBe(false);

    });
});