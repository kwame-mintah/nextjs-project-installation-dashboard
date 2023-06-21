import React from 'react';

interface Props {
  message: string;
}

function Status({ message }: Props) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default Status;
