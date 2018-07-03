import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NoResults from '../../src/components/NoResults.vue';

describe('NoResults.vue', () => {
  it('renders props.heading when passed', () => {
    const heading = 'no results';
    const wrapper = shallowMount(NoResults, {
      propsData: { heading },
    });
    expect(wrapper.text()).to.include(heading);
  });
});

describe('NoResults.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'try again';
    const wrapper = shallowMount(NoResults, {
      propsData: { text },
    });
    expect(wrapper.text()).to.include(text);
  });
});
