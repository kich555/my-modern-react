import { useEffect, useState } from 'react';
import { mean, round } from 'lodash-es';
import type { ReactNode } from 'react';
import { getItem } from 'utils/sessionStorage';

export default function DeferredComponent({ children }: { children: ReactNode }) {
  const defualtDuration = 200;
  const [isDeferred, setIsDeferred] = useState(false);
  const [duration, setDuration] = useState(defualtDuration);
  const { REACT_APP_API_DOMAIN } = process.env;
  const rttRecords: number[] = getItem(`${REACT_APP_API_DOMAIN}_RTTRecords`);
  let rttAverage: number;
  console.log('rttRecords', rttRecords);
  /**
   * 수집된 정보가 100개 이하일 경우
   * 표준편차가 클 수 있다고 판단하여 함수를 진행하지 않고,
   * 100이상일 경우부터 수식을 진행시킴
   *
   * 수집된 정보다 너무 많아졌을 시의 상황도 고려해야 할거같은데 (array method사용으로 성능 이슈가 있을수도 있다고 생각.) 이 부분은 일단은 그냥 두었음
   */
  if (rttRecords.length > 100) {
    rttAverage = round(mean(rttRecords), -2);

    /**
     * 만약 rttAverage가 defualtDuration(200)보다 크지만, 350보다 작을 때
     * duration 상태를 rttAverage - defualtDuration로 변경
     * 이 때 유저가 보이는 skeletonUI는 150ms정도일 것이고 이는 UX적으로 오히려 불편한 깜빡거림 일 것이다. 추가로 만약 CLS 까지 나쁘다면 사용자는 덜컥거림을 느끼게 될 것
     * 그렇기 때문에 최대한 유저의 skeletonUI 노출 시간은 200에 수렴하게 하자
     * (200 ~250구간 정도 아무것도 보이지 않더라도 UX적으로 크게 나빠보이지 않음)
     * but 300을 넘어간다면 살짝 반응이 즉각적이지 않다는 인상을 줄 수 있다.
     * */
    if (defualtDuration < rttAverage && rttAverage < 350) {
      setDuration(rttAverage - duration);
    }
  }
  console.log('duration', duration);

  useEffect(() => {
    // 200ms 지난 후 fallback component render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, duration);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }
  return <>{children}</>;
}
