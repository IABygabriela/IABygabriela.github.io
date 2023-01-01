import React from "react";
import { langCodes } from "../utils";

export const LanguageDropdown = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (language: string) => void;
}) => {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="w-[340px] p-1 border rounded-md cursor-pointer outline-none"
      placeholder="Choose your language"
    >
      {Object.entries(langCodes).map(([key, value]) => (
        <option value={value} key={key}>
          {value}
        </option>
      ))}
    </select>
  );
};
