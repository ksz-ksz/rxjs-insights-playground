import { EMPTY, NEVER, interval, take, of } from 'rxjs';
import { inspectEventsFlow } from '@rxjs-insights/console';
import { switchMap } from 'rxjs/operators';

// Check out the browser console.

const subscription = interval(100)
  .pipe(
    take(3),
    switchMap((i) => {
      switch (i) {
        case 0:
          return EMPTY;
        case 1:
          return of('one');
        case 2:
          return of('two', 'two');
        default:
          return NEVER;
      }
    })
  )
  .subscribe();

setTimeout(() => inspectEventsFlow(subscription), 1000);
