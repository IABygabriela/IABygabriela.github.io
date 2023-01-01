import React, { FC } from "react";

export type CharacterProps = {
  maxLength: number;
  value: string;
};

export const CharacterCounter: FC<CharacterProps> = ({ maxLength, value }) => {
  return (
    <div className="self-end">
      <span
        className={`${
          value.length < maxLength ? "text-gray-400" : "text-red-500"
        } text-sm`}
      >
        {value.length}/{maxLength}
      </span>
    </div>
  );
};
