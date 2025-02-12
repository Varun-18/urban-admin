import { MantineProvider, Text } from '@mantine/core';

import '@mantine/core/styles.css';

import './App.css';

import { NavBar } from './components';

import { useCounterStore } from './store';

function App() {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  console.log('🚀 ~ App ~ counter:', counter);
  return (
    <MantineProvider>
      <NavBar />
      <Text>First vite app with Zustand.!</Text>
      <Text>Counter : {counter}</Text>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </MantineProvider>
  );
}

export default App;
