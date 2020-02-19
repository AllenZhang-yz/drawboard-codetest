import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header, { HeaderWrapper, Img, HeaderTitle } from "../components/Header";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("it should render 1 HeaderWrapper without errors", () => {
    expect(wrapper.find(HeaderWrapper).length).toBe(1);
  });
  it("renders 1 Img without crashing", () => {
    expect(wrapper.find(Img).length).toBe(1);
  });
  it("renders 1 HeaderTitle without crashing", () => {
    expect(wrapper.find(HeaderTitle).length).toBe(1);
  });
  it("renders HeaderTitle with the right content", () => {
    expect(wrapper.find(HeaderTitle).text()).toBe("Air Quality Index");
  });
});
