
'use client'
import React from 'react';
import classes from './styles.module.css';
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={classes.controls}>
        <button onClick={onClose} className={classes.closeButton}><AiOutlineClose/></button>
        </div>
      </div>
    </div>
  );
}