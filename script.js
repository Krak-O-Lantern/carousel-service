import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
  vus: 200,
  duration: '30s',
};
export default function () {
  const randomInt = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3007/api/listings/${randomInt}`);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(0.1);
}
