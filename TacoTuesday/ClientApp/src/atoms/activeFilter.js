import { atom } from 'recoil'

// like  const [activeFilter, setActiveFilter] = useState('')

export const activeFilterAtom = atom({
  key: 'activeFilter',
  default: '',
})
