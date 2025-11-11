import React from 'react';
import './Card.css';

// Cardが受け取るpropsの型を定義
interface CardProps {
  // childrenはCardコンポーネントで囲んだ中身すべてを表す特別なprops
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="card-base">
      {children}
    </div>
  );
};