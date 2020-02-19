import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loader, { LoaderWrapper } from "../components/Loader";

Enzyme.configure({ adapter: new Adapter() });

describe("<Loader />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });
  it("it should render 1 LoaderWrapper without errors", () => {
    expect(wrapper.find(LoaderWrapper).length).toBe(1);
  });
  it("renders 1 CircularProgress without crashing", () => {
    expect(wrapper.find(CircularProgress).length).toBe(1);
  });
});
