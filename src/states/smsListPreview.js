import { Immer } from "immer"
import { create } from "zustand"

const useGlobalState = create((set) => ({
  smsData: [
    // { name: "yair", message: "Hello, how are you?", phone: "John" },
    // { name: "d", message: "I will be late today", phone: "Alice" },
    // { name: "a", message: "Can you send me the document?", phone: "Bob" },
  ],
  updateSmsData: (newObject) =>
    set((state) => ({
      smsData: [...state.smsData, ...newObject],
    })),
}))

export default useGlobalState
