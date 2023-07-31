import React from 'react';

interface AddButtonProps {
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      Adicionar
    </button>
  );
};

export default AddButton;
