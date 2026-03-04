import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserCard from '../UserCard.vue'

describe('UserCard', () => {
  it('renders properly with person data', () => {
    const mockPerson = {
      name: { title: 'Mr', first: 'John', last: 'Doe' },
      email: 'john.doe@example.com',
      image: 'https://via.placeholder.com',
      country: 'USA',
      city: 'New York',
    }

    const wrapper = mount(UserCard, {
      props: { person: mockPerson },
    })

    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('Doe')
    expect(wrapper.text()).toContain('john.doe@example.com')

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(mockPerson.image)
  })
})
