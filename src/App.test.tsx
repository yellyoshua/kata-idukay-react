import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('renders', () => {
  test("should be rendered", () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  })
});
