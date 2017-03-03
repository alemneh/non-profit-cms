import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddMemberComponent from '../src/client/app/components/AddMemberComponent/AddMember';

let wrapper, Props;
const props = {
  handleAddMember: () => {},
  handleInputChange: () => {}
} ;

describe('<AddMemberComponent />', () => {
  beforeEach(() => {
    wrapper = shallow(<AddMemberComponent {...props}/>);

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

  it('should have a function handleAddMember prop', () => {
    const { handleAddMember } = Props;
    expect(handleAddMember).to.be.defiend;
    expect(handleAddMember).to.be.a('Function');
  });
});
