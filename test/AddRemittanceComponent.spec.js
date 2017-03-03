import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddRemittanceComponent from '../src/client/app/components/AddRemittanceComponent/AddRemittance';

let wrapper, Props;
const props = {
  handleAddRemittance: () => {},
  handleInputChange: () => {}
} ;

describe('<AddRemittanceComponent />', () => {
  beforeEach(() => {
    wrapper = shallow(<AddRemittanceComponent {...props}/>);

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

  it('should have a function handleAddRemittance prop', () => {
    const { handleAddRemittance } = Props;
    expect(handleAddRemittance).to.be.defiend;
    expect(handleAddRemittance).to.be.a('Function');
  });
});
