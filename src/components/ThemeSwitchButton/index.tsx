import React from 'react';

import { Button } from './styled';

interface Props {
  toggleTheme: () => void;
}

export function ThemeSwitchButton({ toggleTheme }: Props) {
  return (
    <Button onClick={toggleTheme} >
      Switch Theme
    </Button>
  );
}