import create from "zustand"

const useStore = create(set => ({
  count: 1,
  inc: () => set(state => ({count: state.count + 1})),
}))

function Controls() {
  const inc = useStore(state => state.inc)
  return <button onClick={inc}>one up</button>
}

function Counter() {
  const count = useStore(state => state.count)
  return <h1>{count}</h1>
}

const useProfileStore = create(set => ({
  name: "Anon",
  color: "#232323",
  info: "...",
  avatar: "https://avatars.onflow.org/avatar/pew",
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}))

const DEFAULT = {
  name: "Anon",
  color: "#232323",
  info: "...",
  avatar: "https://avatars.onflow.org/avatar/pew",
}
const IDLE = "IDLE"
const PROCESSING = "PROCESSING"
