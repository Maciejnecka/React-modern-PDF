import './styles/styles.css';
import Box from './Box';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const settings = {
    primaryFontSize: '18px',
    primaryColor: '#666',
  };

  return (
    <ThemeContext.Provider value={settings}>
      <Box />
    </ThemeContext.Provider>
  );
};

export default App;
