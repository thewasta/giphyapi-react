import React from "react";
import {shallow} from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe("Pruebas en GifGridItem", () => {
    const title = "Titulo";
    const URL = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={URL}/>);

    test("debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("el atributo alt debe ser el title", () => {
        expect(wrapper.find("img").prop("alt")).toBe(title);
    });

    test("Comprobar URL", () => {
        expect(wrapper.find("img").prop("src")).toBe(URL);
    });

    test("Comprobar las clases de mi componente", () => {
        expect(wrapper.find("div").prop("className")).toBe("card animate__animated animate__fadeIn");
        expect(wrapper.find("div").prop("className").includes("animate__fadeIn")).toBe(true);
    });
});