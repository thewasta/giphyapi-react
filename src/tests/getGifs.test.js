import {getGifs} from "../helpers/getGifs";

describe("Pruebas el helpter getGif", () => {
    test("debe traer 5 elementos", async () => {
        const gifs = await getGifs("Shin Chan");
        expect(gifs.length).toBe(5);
    });
});