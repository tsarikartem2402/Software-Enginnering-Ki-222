import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // ramp up to 20 users
    { duration: '1m', target: 20 },  // stay at 20 users
    { duration: '30s', target: 50 }, // spike to 50 users
    { duration: '30s', target: 0 },  // ramp down
  ],
};

export default function () {
  const res = http.get('http://localhost:8080');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}
