import React, { useState } from 'react';

const Card = ({ title, content, icon }) => {

  return (
    <div
      className={`h-40 w-96 bg-neutral text-neutral-content overflow-hidden hover:scale-105 `}
    >
      <div className="h-full w-full p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm">{content}</p>
        </div>
        {/* Adicione mais elementos conforme necessário */}
      </div>
    </div>
  );
};

export default Card;