import { useMemo } from 'react';
import { useContent } from '../../context/ThemeContext';
import { useHeaderNavigation } from './useHeaderNavigation';

export interface NavItem {
  label: string;
  href: string;
}

export function useNavItems(): NavItem[] {
  const content = useContent();
  const { resolveTargetId } = useHeaderNavigation();

  return useMemo(
    () =>
      content.navigationLinks.map((label) => ({
        label,
        href: resolveTargetId(label),
      })),
    [content.navigationLinks, resolveTargetId]
  );
}
