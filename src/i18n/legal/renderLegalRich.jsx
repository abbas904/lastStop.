import React from "react";

/** Replaces {{brand}}, {{phone}}, {{email}} with styled spans (brand orange). */
export function renderLegalRich(text, brandLabel) {
  if (text == null || text === "") return null;
  const parts = String(text).split(
    /(\{\{brand\}\}|\{\{phone\}\}|\{\{email\}\})/g
  );
  return parts.map((part, i) => {
    if (part === "{{brand}}") {
      return (
        <span key={i} className="text-orange-500 font-bold">
          {brandLabel}
        </span>
      );
    }
    if (part === "{{phone}}") {
      return (
        <span key={i} className="text-orange-500">
          00966530303356
        </span>
      );
    }
    if (part === "{{email}}") {
      return (
        <span key={i} className="text-orange-500 font-semibold">
          a.t.s.team@hotmail.com
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
