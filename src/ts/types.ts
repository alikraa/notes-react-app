import React from 'react';

interface NoteData {
  id: string;
  noteId: string;
  colorName: string;
  noteName: string;
  noteText: string;
  noteDate: Date;
  isFavorites: boolean;
  isEdit: boolean;
}

interface ModalWindowAction {
  handleClick: () => void;
}

interface ModalWindowProps extends ModalWindowAction {
  hidden: boolean;
  children: React.ReactNode;
}

export type { NoteData, ModalWindowAction, ModalWindowProps };
