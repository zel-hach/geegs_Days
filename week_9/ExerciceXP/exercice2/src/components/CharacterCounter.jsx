import React, { useEffect, useRef, useState } from 'react';

export default function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const inputEl = inputRef.current;
    if (!inputEl) return;

    const updateCount = () => {
      setCount(inputEl.value.length);
    };

    updateCount();

    inputEl.addEventListener('input', updateCount);
    return () => inputEl.removeEventListener('input', updateCount);
  }, []);

  return (
    <div className="CharacterCounter">
      <label className="CharacterCounter-label" htmlFor="text-input">
        Type something
      </label>
      <input
        id="text-input"
        ref={inputRef}
        className="CharacterCounter-input"
        type="text"
        placeholder="Start typing..."
        autoComplete="off"
      />
      <div className="CharacterCounter-count">Characters: {count}</div>
    </div>
  );
}

