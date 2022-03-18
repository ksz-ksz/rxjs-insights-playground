import { interval, take } from 'rxjs';
import { flow } from '@rxjs-insights/console';

document.body.textContent = `
Check out the browser console.
If you are running this example from Stackblitz, open this page in a separate window first.
`;

const subscription = interval(100).pipe(take(3)).subscribe();

setTimeout(() => flow(subscription), 1000);
