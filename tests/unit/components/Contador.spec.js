import { mount } from "@vue/test-utils";
import  Contador from "@/components/Contador.vue";

describe("Pruebas en Contador.vue", () => {
     it("Validar msg", () =>{
          const wrapper = mount(<Contador />);

          expect(wrapper.find("h1").text()).toBe("Counter: 0");
          //expect(wrapper.html()).toContain("Counter: 0");
          // console.log(wrapper.html());
     });
});
