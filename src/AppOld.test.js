import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./AppOld";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders counter-display", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='counter-display']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='increment-button']");
  expect(appComponent.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialStateCounter = wrapper.state("counter");
  expect(initialStateCounter).toBe(1);
});
test("clicking button increments counter display", () => {
  let counter = 7;
  const wrapper = setup(null, { counter });

  const button = wrapper.find("[data-test='increment-button']");
  button.simulate("click");

  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain("8");
});
