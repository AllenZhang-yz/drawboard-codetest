import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import MatchedStation, {
  StyledMatchedStation
} from "../components/MatchedStation";

Enzyme.configure({ adapter: new Adapter() });

const initialState = { inputValue: "" };
const mockStore = configureStore();

describe("<MatchedStation />", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<MatchedStation store={store} />);
    wrapper.setProps({ item: "melbourne" });
  });
  it("it should render 1 StyledMatchedStation without errors", () => {
    expect(wrapper.find(StyledMatchedStation).length).toBe(1);
  });
  it("it should select the clicked item", () => {
    wrapper
      .find(StyledMatchedStation)
      .children()
      .simulate("click");
  });
});
