import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import PersonList from "./PersonList";

describe("App", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renders a person list", () => {
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it("has people property on state", () => {
    const personList = appWrapper.find(PersonList);
    const appState = personList.people;
    console.log(appState);
    expect(appState).not.toBeNull();
  });

  it("sd", () => {
    //expect(appWrapper.find())
  });
});
