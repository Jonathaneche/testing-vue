import { mount } from "@vue/test-utils";
import  App from "@/App.vue";

test("Mostrar h1 de Hola", () => {
     const wrapper = mount(<App />);
     expect(wrapper.html()).toBe(`<h1>Hola</h1>`)
})