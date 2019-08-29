import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

describe('App', () => {
  const app = shallow(<App />);
  it('should render the app', () => {
    expect(app.exists()).toBe(true);
  });
});
