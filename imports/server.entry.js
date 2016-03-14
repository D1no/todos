// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './api/server.fixtures';

// This file configures the Accounts package to define the UI of the reset password email.
import './server/reset-password-email';

// Set up some rate limiting and other important security settings.
import './server/security';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import './api/server.register';
