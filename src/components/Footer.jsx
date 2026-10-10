import React from 'react';
import { Footerdemo } from './ui/footer-section';

export default function Footer({ setActivePage }) {
  return (
    <div className="w-full">
      <Footerdemo onNavigate={setActivePage} />
    </div>
  );
}
