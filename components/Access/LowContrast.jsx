import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const LowContrast = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleContrast = () => {
    setIsHighContrast(prevState => !prevState);

    // Aktywuj tryb ciemny
    setTheme(theme === 'dark' ? 'light' : 'dark');

    // Zmiana stylów na niski kontrast
    if (!isHighContrast) {
      document.body.style.backgroundColor = '#000000'; // Czarne tło
      document.body.style.color = '#ffff00'; // Żółty kolor tekstu
    } else {
      document.body.style.backgroundColor = ''; // Usunięcie ustawień tła
      document.body.style.color = ''; // Usunięcie ustawień koloru czcionki
    }
  };

  return (
    <div>
      <button onClick={toggleContrast}className="h-full w-full flex z-10 absolute opacity-0"></button>
    </div>
  );
};

export default LowContrast;
