import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomePageComponent from '../src/client/app/components/HomePageComponent/HomePage';

let wrapper;


describe('<HomePageComponent />', () => {
  beforeEach(() => {
    wrapper = shallow(<HomePageComponent />);

  });

  it('should render', () => {
    expect(wrapper).to.exist;
  });

});
