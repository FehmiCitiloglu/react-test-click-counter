
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';
Enzyme.configure({ adapter: new EnzymeAdapter()})

test('renders whithout error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {

})

test('render counter display', () => {})


test('render counter starts at 0', () => {})


test('clicking button increments counter display', () => {})