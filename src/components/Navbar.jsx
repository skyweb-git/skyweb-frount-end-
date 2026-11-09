import React from 'react';
import { AnimatedNavFramer } from './ui/navigation-menu';

export default function Navbar({ onOpenModal }) {
  return <AnimatedNavFramer onOpenModal={onOpenModal} />;
}
