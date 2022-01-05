
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()})


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders whithout error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
});

test('render counter display', () => {
    const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "increment-button")
  expect(appComponent.length).toBe(1);
})


test('render counter starts at 0', () => {
    const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "counter-display")
  expect(appComponent.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0")
})

test('clicking on button increments counter display', () => {
  const wrapper = setup()
  // find the button
  const button = findByTestAttr(wrapper, 'increment-button')
  
  // click the button
  button.simulate('click')

  // find the display, and test the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1")
})
describe('decrement button', () => {
test('renders decrement button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  expect(button.length).toBe(1)
})

test('clicking on button decrement counter display', () => {
  const wrapper = setup()

  // increment button
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  
  //decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe("0")
})
})

describe('error when counter goes below 0', () => {

test('error does not show when not needed', () => {
  const wrapper = setup()
  const errorDiv = findByTestAttr(wrapper, 'counter-error');
  expect(errorDiv.length).toBe(0)
})})

describe('counter is 0 and decrement is clicked', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
  })
  test('error shows', () => {
    const errorDiv = findByTestAttr(wrapper, 'counter-error');
    expect(errorDiv.length).toBe(1)
  })
  test('counter still display 0', () => {
    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe("0")
  })
  test('clicking the increment clears the error', () => {
    const incButton = findByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click')

    const errorDiv = findByTestAttr(wrapper, 'counter-error');
    expect(errorDiv.length).toBe(0)
  })
})

test('clicking on button decrement error display', () => {
  const wrapper = setup()

  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  const errorMessage = findByTestAttr(wrapper, 'counter-error').text()
  expect(errorMessage).toBe("Counter can not go below zero")
})
