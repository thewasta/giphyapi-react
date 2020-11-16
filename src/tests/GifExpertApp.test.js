import React from "react";
import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas de Index", () => {
    test("Comprobar el snapshot", () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test("debe mostrar lista de categorías", function (assert) {
        const categories = ["One Punch", "Doraemon"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
        assert();
    });
});