import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export default function DeferredComponent({ children }: { children: ReactNode }) {
  const [isDeferred, setIsDeferred] = useState(false);
  useEffect(() => {
    // 200ms 지난 후 fallback component render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }
  return <>{children}</>;
}
