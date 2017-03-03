import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AccountInfo from '../src/client/app/components/AccountComponent/AccountInfo';
import AccountHistory from '../src/client/app/components/AccountComponent/AccountHistory';


let wrapper, Props;
const props = {
  account: {},
  history: [],
  handleViewTransaction: () => {}
};

describe('<AccountComponent />', () => {
  describe('<AccountInfo />', () => {
    beforeEach(() => {
      wrapper = shallow(<AccountInfo {...props}/>);

      Props = wrapper.unrendered.props;
    });

    it('should render', () => {
      expect(wrapper).to.exist;
    });

    it('should have an object of account', () => {
      const { account } = Props;
      expect(account).to.be.defiend;
      expect(account).to.be.an('Object');
    })
  });
  describe('<AccountHistory />', () => {
    beforeEach(() => {
      wrapper = shallow(<AccountHistory {...props} />);

      Props = wrapper.unrendered.props;
    });

    it('should render', () => {
      expect(wrapper).to.exist;
    });

    it('should have an array prop history', () => {
      const { history } = Props;
      expect(history).to.be.defiend;
      expect(history).to.be.an('Array');
    });

    it('should have an object prop handleViewTransaction', () => {
      const { handleViewTransaction } = Props;
      expect(handleViewTransaction).to.be.defiend;
      expect(handleViewTransaction).to.be.a('Function');
    });
  });
})
