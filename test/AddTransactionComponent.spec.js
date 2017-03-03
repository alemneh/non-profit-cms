import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddTransactionComponent from '../src/client/app/components/AddTransactionComponent/AddTransaction';

let wrapper, Props;
const props = {
  handleAddTransaction: () => {},
  handleInputChange: () => {},
  members: []
} ;

describe('<AddTransactionComponent />', () => {
  beforeEach(() => {
    wrapper = shallow(<AddTransactionComponent {...props}/>);

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

  it('should have a function handleAddTransaction prop', () => {
    const { handleAddTransaction } = Props;
    expect(handleAddTransaction).to.be.defiend;
    expect(handleAddTransaction).to.be.a('Function');
  });

  it('should have an array members prop', () => {
    const { members } = Props;
    expect(members).to.be.defiend;
    expect(members).to.be.a('Array');
  });
});
