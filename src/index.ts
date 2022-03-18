import { interval, take } from 'rxjs';
import { flow } from '@rxjs-insights/console';

const subscription = interval(100).pipe(take(10)).subscribe();

setTimeout(() => flow(subscription), 1000);
