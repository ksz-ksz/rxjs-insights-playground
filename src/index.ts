import { EMPTY, NEVER, interval, take, of } from 'rxjs';
import { connect } from '@rxjs-insights/devtools/connect';
import { inspect } from '@rxjs-insights/devtools';
import { switchMap } from 'rxjs/operators';

async function run() {
  await connect(); // wait for the devtools to connect

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
      .subscribe({
        next(value) {
          console.log('next', value);
        },
        error(error) {
          console.log('error', error);
        },
        complete() {
          console.log('complete');
        },
      });

  inspect(subscription);
}

run();
