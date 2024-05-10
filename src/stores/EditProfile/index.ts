import { create } from 'zustand';
import { UseEditProfileProps } from './types';

export const useEditProfile = create<UseEditProfileProps>((set) => ({
  isEditing: true,
  setIsEditing: data => {
    set({ isEditing: data });
  }
}));
