import React from "react";
import GifGrid from "../components/GifGrid";
import {shallow} from "enzyme";
import {useFetchGifs} from "../hooks/useFetchGifs";

jest.mock("../hooks/useFetchGifs");
describe("Pruebas de GifGrid", () => {
    const category = "Goku";
    test("should show the correct component and match with the snapshot", () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar items cuando se cargar imágenes con useFetchGif", function (assert) {
        const gifs = [{
            id: "ABC",
            url: "https://cualqircosa.com/abc.jpg",
            title: "Cualquier cosa"
        }];
        useFetchGifs.mockReturnValue({
            data: [gifs],
            loading: true
        });
        const wrapper = shallow(<GifGrid category="Dragon"/>);
        expect(wrapper).toMatchSnapshot();
        assert();
    });
});