import { useRef, useState, useEffect } from 'react';

export const useCloseContext = (initialValue = false, defer = false) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      !defer && setVisible(false);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyPress, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};
