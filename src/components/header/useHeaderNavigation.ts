import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINK_MAP } from './navConfig';
import type { NavItem } from './useNavItems';

export function useActiveNavId(items: NavItem[]): string {
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState<string>(items[0]?.href || '');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveId(pathname);
      return;
    }

    const sectionIds = items
      .map((item) => item.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.slice(1));

    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the most visible section
            let maxRatio = 0;
            let topSection = sectionIds[0];
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                topSection = sectionId;
              }
            });

            if (visibleSections.size > 0) {
              setActiveId(`#${topSection}`);
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-20% 0px -60% 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname, items]);

  return activeId;
}

const DARK_HERO_PATHS = new Set([
  '/support',
  '/terms',
  '/privacy',
  '/refund',
  '/digital-products',
  '/data-processing',
  '/end-user-terms',
  '/merchant-disclosure',
  '/ccpa-notice',
  '/e-signature',
  '/data-subject-request',
]);

export function useIsDarkHeroPath(exclude: string[] = []): boolean {
  const { pathname } = useLocation();
  return DARK_HERO_PATHS.has(pathname) && !exclude.includes(pathname);
}

const LIGHT_BG_PATHS = new Set(['/get-started', '/request-refund']);

export function useIsLightBgPath(): boolean {
  const { pathname } = useLocation();
  return LIGHT_BG_PATHS.has(pathname);
}

export function useHeaderNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const resolveTargetId = useCallback((linkText: string) => {
    return (
      NAV_LINK_MAP[linkText] ||
      `#${linkText.toLowerCase().replace(/\s+/g, '-')}`
    );
  }, []);

  const goToSection = useCallback(
    (targetId: string) => {
      if (targetId.startsWith('/')) {
        navigate(targetId);
        return;
      }
      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash: targetId });
      } else {
        navigate({ pathname: '/', hash: targetId });
        document
          .querySelector(targetId)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [location.pathname, navigate]
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      goToSection(targetId);
    },
    [goToSection]
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate('/get-started');
    },
    [navigate]
  );

  const handleCustomerCareClick = useCallback(() => {
    navigate('/support');
  }, [navigate]);

  return {
    resolveTargetId,
    goToSection,
    handleNavClick,
    handleButtonClick,
    handleCustomerCareClick,
  };
}
