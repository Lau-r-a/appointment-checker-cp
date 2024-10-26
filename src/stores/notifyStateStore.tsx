import { create } from 'zustand'
import { CurNotifyStateEnum } from '../models'

type Store = {
  notifyState: CurNotifyStateEnum
  setNotifyState: (state: CurNotifyStateEnum) => void
}

const useNotifyStore = create<Store>()((set) => ({
  notifyState: CurNotifyStateEnum.ALLITEMS,
  setNotifyState: (state: CurNotifyStateEnum) => set({notifyState: state}),
}))

export default useNotifyStore