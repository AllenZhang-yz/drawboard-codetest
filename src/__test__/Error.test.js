import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Chip from "@material-ui/core/Chip";
import Error, { ErrorWrapper } from "../components/Error";

Enzyme.configure({ adapter: new Adapter() });

describe("<Error />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Error />);
  });
  it("it should render 1 ErrorWrapper without errors", () => {
    expect(wrapper.find(ErrorWrapper).length).toBe(1);
  });
  it("renders 1 Chip without crashing", () => {
    expect(wrapper.find(Chip).length).toBe(1);
  });
});
