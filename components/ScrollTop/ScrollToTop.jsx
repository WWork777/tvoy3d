"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Получаем информацию о текущем пути и предыдущем переходе
    const prevPath = sessionStorage.getItem('prevPath');
    const isBackNavigation = prevPath === pathname;

    // Сохраняем текущий путь как предыдущий
    sessionStorage.setItem('prevPath', pathname);

    // Если это не возврат назад, прокручиваем страницу вверх
    if (!isBackNavigation) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}