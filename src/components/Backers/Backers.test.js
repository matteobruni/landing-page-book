import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Backers from './Backers';

configure({ adapter: new Adapter() });

describe('Backers', () => {
  let props;
  let mounted;
  const backers = () => {
    if (!mounted) {
      mounted = shallow(<Backers {...props} />);
    }
    return mounted;
  };
  describe('Backers', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    beforeEach(() => {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Backers {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = backers().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('calls componentDidMount', () => {
      const spy = jest.spyOn(Backers.prototype, 'componentDidMount');
      const wrapper = shallow(<Backers {...props} />);

      expect(spy).toBeCalled();
      afterEach(() => {
        spy.mockClear();
      });
    });

    it('Formating data', () => {
      backers()
        .instance()
        .formatData({
          backers: [
            {
              name: 'Alberto Roman Vieito',
              profile: 'https://twitter.com/romanvieito',
              image: 'https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg',
              contributionAmount: '125'
            }
          ]
        });

      expect(backers().state('backers')).toMatchObject([
        {
          image: 'https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg',
          tooltip: '$125 by Alberto Roman Vieito',
          url: 'https://twitter.com/romanvieito'
        }
      ]);
    });
  });
});
