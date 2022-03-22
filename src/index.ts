import { EMPTY, NEVER, interval, take, of } from 'rxjs';
import { flow } from '@rxjs-insights/console';
import { switchMap } from 'rxjs/operators';

document.body.textContent = `
Check out the browser console.
If you are running this example from StackBlitz, open this page in a separate window first.
`;

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

setTimeout(() => flow(subscription), 1000);
