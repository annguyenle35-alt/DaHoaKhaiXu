/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WelcomeLanding } from './components/WelcomeLanding';
import { MainEducationPortal } from './components/MainEducationPortal';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  // If not yet entered, display the Welcome Cover Screen with the center button
  if (!hasEntered) {
    return (
      <WelcomeLanding
        onEnter={() => {
          setHasEntered(true);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />
    );
  }

  // Streamlined, focused inner page as requested
  return (
    <MainEducationPortal
      onBackToWelcome={() => {
        setHasEntered(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
    />
  );
}
