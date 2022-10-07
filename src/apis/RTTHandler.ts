import { mean, round } from 'lodash-es';
import { getItem, setItem } from 'utils/sessionStorage';
import { StringifiedResponseTime } from './config';

type newData = Record<'startTime' | 'endTime', Date>;

interface HandleUpdateRTTParams {
  duration: number;
  baseURL: string;
}

/**
    @author kich555
    @description 유저의 RTT를 추적해서 최적화 된 pendingUX를 제공
    만약 특정 api or baseURL의 모든 api에 대한 유저의 RTT의 평균값이 200ms 이하라면, pendingUI를 랜더시키지 않을 것
    (오히려 산만해보인다.)

    why sessionStorage? 

    1. 지표를 logging하는 서비스에 권한을 위임한다면 더 좋겠지만, 해당 작업이 과분하다 느껴질 때
    Local storage를 사용해도 괜찮겠지만, 그렇지 않을 경우 오히려 지표에 혼란을 가져올 수 있을 것 같아서 session storage를 사용
    3. 일단 테스트해보자
    */
export function getRTT(data: StringifiedResponseTime) {
  if (data === undefined) {
    return null;
  }
  const startTime = new Date(JSON.parse(data).startTime);
  const newData: newData = { startTime: startTime, endTime: new Date() };
  const duration = newData.endTime.getTime() - newData.startTime.getTime();
  return duration;
}

export function handleUpdateRTT({ duration, baseURL }: HandleUpdateRTTParams) {
  const rttRecords: number[] = getItem(`${baseURL}_RTTRecords`);
  rttRecords.push(duration);
  return setItem(`${baseURL}_RTTRecords`, rttRecords);
}

// export function handleRttUpdate() {

//     return
// }
