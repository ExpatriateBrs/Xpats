interface DataProps {
  isEditing: boolean;
}

export interface UseEditProfileProps extends DataProps {
  setIsEditing: (isEditing: DataProps['isEditing']) => void;
}
