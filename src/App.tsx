/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeLanding } from './components/WelcomeLanding';
import { MainEducationPortal } from './components/MainEducationPortal';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7FAF7] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <WelcomeLanding
            key="welcome-landing"
            onEnter={() => {
              setHasEntered(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <MainEducationPortal
            key="main-portal"
            onBackToWelcome={() => {
              setHasEntered(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
