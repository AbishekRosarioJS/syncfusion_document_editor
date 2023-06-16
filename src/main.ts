import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Mgo+DSMBaFt+QHJqXU1nQ1BbdF9AXnNBdFJxT2Zdby8Nf1dGYl9RQnZdQl1iSHxSf0dgXQ==;Mgo+DSMBPh8sVXJ1S0R+VFpDaV5dX2NLfUN+T2JedVt0ZCQ7a15RRnVfRF1hSX5Sd0diUHxZdQ==;ORg4AjUWIQA/Gnt2VFhiQllPcUBDQmFJfFBmTWlYeFR1cEU3HVdTRHRcQltjS35Td0RhWHZbcXA=;MjI4ODk4MEAzMjMxMmUzMDJlMzBGUEQrcXZMeFFuNGNCTWVENFdPUk0rMm5LTWJBMVBoRkIzazg4ZDV5OUFnPQ==;MjI4ODk4MUAzMjMxMmUzMDJlMzBrSTY2cmg4UXlqbTI4eHAyNnRSVVl0NFhwUER1bEh3U1dpMGRFK3BVYXV3PQ==;NRAiBiAaIQQuGjN/V0d+Xk9MfVhdXHxLflF1VWtTfll6cVFWESFaRnZdQV1lSXxTdkRiW31edHRR;MjI4ODk4M0AzMjMxMmUzMDJlMzBadGtzSy9vdVZ3elJPcGYxdzY4ZXl6SUVhaG44b3lQcUdQSWZGSnlmSDdnPQ==;MjI4ODk4NEAzMjMxMmUzMDJlMzBJckVqRFAwQWRpU1ZoQWJWYllTTFhBdXB3T3FCWTdCeWkxZ2RINmlKU3ZNPQ==;Mgo+DSMBMAY9C3t2VFhiQllPcUBDQmFJfFBmTWlYeFR1cEU3HVdTRHRcQltjS35Td0RhW35ed3A=;MjI4ODk4NkAzMjMxMmUzMDJlMzBjVy9BNjkybjJ1NDhKckthakFmQUoyM0VOaGtqak9SSG9sWjlGYi9ISFZ3PQ==;MjI4ODk4N0AzMjMxMmUzMDJlMzBlR1JHTjNWeWprbDBJMDJOenh2MjFOb2k0dmtHM0xtbjRvcmp2N1c0MC9ZPQ==;MjI4ODk4OEAzMjMxMmUzMDJlMzBadGtzSy9vdVZ3elJPcGYxdzY4ZXl6SUVhaG44b3lQcUdQSWZGSnlmSDdnPQ==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));