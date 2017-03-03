import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddAdminComponent from '../src/client/app/components/AddAdminComponent/AddAdmin';

let wrapper, Props;
const props = {
  handleAddAdmin: () => {},
  handleInputChange: () => {}
} ;

describe('<AddAdminComponent />', () => {
  beforeEach(() => {
    wrapper = shallow(<AddAdminComponent {...props}/>);

    Props = wrapper.unrendered.props;
  });

  it('should render', () => {
    expect(wrapper).to.exist;
  });

  it('should have a function handleInputChange prop', () => {
    const { handleInputChange } = Props;
    expect(handleInputChange).to.be.defiend;
    expect(handleInputChange).to.be.a('Function');
  });

  it('should have a function handleAddAdmin prop', () => {
    const { handleAddAdmin } = Props;
    expect(handleAddAdmin).to.be.defiend;
    expect(handleAddAdmin).to.be.a('Function');
  });
})
