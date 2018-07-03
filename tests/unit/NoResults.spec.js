import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NoResults from '../../src/components/NoResults.vue';

describe('NoResults.vue', () => {
  it('renders props when passed', () => {
    const heading = 'no results';
    const text = 'try again';
    const wrapper = shallowMount(NoResults, {
      propsData: { heading, text },
    });
    expect(wrapper.text()).to.include(heading)
      .and.include(text);
  });
});
