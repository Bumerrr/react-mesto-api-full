import React from 'react';

const useCloseEsc = (isOpen, closeAllPopups) => {

  React.useEffect(() => {
    function handleCloseEsc(event) {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  }, [isOpen]);

}

export default useCloseEsc;