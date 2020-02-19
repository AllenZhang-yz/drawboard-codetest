import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer, { FooterWrapper } from "../components/Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("it should render 1 FooterWrapper without errors", () => {
    expect(wrapper.find(FooterWrapper).length).toBe(1);
  });
  it("renders 1 p tag without crashing", () => {
    expect(wrapper.find("p").length).toBe(1);
  });
});
