# Authentication Repository

The `AuthenticationRemoteRepo` is responsible for making calls to the API with a given username and password. It also has a method `isAuthenticated` that checks if there is a user logged in on the app or not.

The interface being overridden here is `AuthenticationRepository` and as mentioned in the Architecture section, the domain layer defines the repository contracts.