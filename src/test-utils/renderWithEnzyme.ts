import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const shallowComponent = (componentUI: any) => {
  return shallow(componentUI);
};

export { shallowComponent };
