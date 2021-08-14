import { ThemeProvider } from '@emotion/react';
import preset from '@rebass/preset';
import './App.css';
import ProductForm from './components/ProductForm'
import ProductFormAdvanced from './components/ProductFormAdvanced'

function App() {
  return (
  <ThemeProvider theme={preset}>
      <ProductForm />
      <ProductFormAdvanced />
  </ThemeProvider>
  );
}

export default App;
