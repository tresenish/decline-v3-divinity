import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/** Navigates to the full-page contact / get-started form (header + footer stay in layout). */
export function useGoToGetStarted() {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate('/get-started');
  }, [navigate]);
}
