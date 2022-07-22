import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, {
      props: { firstName: "Zachary", lastName: "Snow" },
    });
    expect(wrapper.text()).toContain("Hello Zachary Snow");
  });
});
