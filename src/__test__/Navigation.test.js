import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { fromJS } from "immutable";
import Navigation from "../components/Navigation";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = mockStore(initialState);
  const wrapper = shallow(<Navigation store={store} />);
  console.log(wrapper.debug());
  return wrapper;
};

const mockStore = configureStore();

describe("<Navigation />", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = fromJS({
      inputValue: "melbourne",
      matchedStations: [],
      showMatchedStations: false
    });
    wrapper = setUp(initialState);
  });
  it("it should render 1 Nav without errors", () => {
    expect(wrapper.find("Memo()").length).toBe(1);
  });
});
