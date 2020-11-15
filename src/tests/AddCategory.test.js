import React from "react";
import {shallow} from "enzyme";
import {AddCategory} from "../components/AddCategory";

describe("Pruebas en el componente <AddCategory/>", () => {

    const setCategories = jest.fn();
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    test("Comprobar el snapshot", function (assert) {
        expect(wrapper).toMatchSnapshot();
        assert();
    });
    test("Debe cambiar la caja de test", function (assert) {
        const input = wrapper.find("input");
        const value = "Hola mundo";
        input.simulate("change", {target: {value}});
        expect(wrapper.find("p").text().trim()).toBe(value);
        assert();
    });
    test("NO debe de trigger submit", function (assert) {
        wrapper.find("form").simulate("submit", {
            preventDefault() {
            }
        });
        expect(setCategories).not.toHaveBeenCalled();
        assert();
    });
    test("debe de llamar setCategories y limpiar caja de texto", function (assert) {
        const value = "Nuevo valor";
        wrapper.find("input").simulate("change", {target: {value}});
        wrapper.find("form").simulate("submit", {
            preventDefault() {
            }
        });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).not.toHaveBeenCalledTimes(2);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Comprobar de que setCategories se ha llamado como una función
        expect(wrapper.find("input").prop("value")).toBe("");
        assert();
    });
});
