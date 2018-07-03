import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DashboardViewInfo from '../../src/components/dashboard/DashboardViewInfo.vue';
import repo from './mockRepo';

describe('DashboardViewInfo.vue', () => {
  it('renders props.repo when passed', () => {
    const wrapper = shallowMount(DashboardViewInfo, {
      propsData: { repo },
    });
    expect(wrapper.text()).to.include(repo.name)
      .and.include(repo.description)
      .and.include(repo.topics[0]);
  });
});
