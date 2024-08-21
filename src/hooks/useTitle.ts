import { useEffect } from 'react';
import { pageBaseTitle } from '../constants/names';

export const useTitle = (title?: string) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - ${pageBaseTitle}`;
      return;
    }

    document.title = pageBaseTitle;
  }, [title]);
};
