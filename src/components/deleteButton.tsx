import React from 'react';

interface AddButtonProps {
  onClick?: () => void;
}

const DeleteButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button className="btn btn-danger" onClick={onClick}>Remover</button>
  );
};

export default DeleteButton;
