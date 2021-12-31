# Authentication Helper

The `AuthHelper` class defines a few methods that help in authenticating with the API. 

One of these methods that helps in authentication is the `getToken` method which returns the token that is stored in the local storage for the currently authenticated user. 

It also exposes a stream that can be listened to in order to navigate the user to the login page when a log out happens. The listener on this stream will only need to check if the passed value is `true`.
