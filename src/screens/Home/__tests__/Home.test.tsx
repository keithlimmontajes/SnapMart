import Component from "../index";
import toJson from "enzyme-to-json";
import { shallowComponent } from "../../../test-utils/renderWithEnzyme";

describe("Test suite Home: ", () => {
  const all = shallowComponent(<Component />);
  expect(toJson(all)).toMatchSnapshot();
});
