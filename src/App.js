import { create } from 'zustand'

import './App.css';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
console.log("asdsafasfs")
function App() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <div className="App">
      {bears}
      <button onClick={increasePopulation} type="button">+</button>
    </div>
  );
}

export default App;
