# User Profile

Currently, the user profile component has two repositories. One is the repository that fetches the user info (`UserRepository`) and the other is the repository that fetches wallet related info (`WalletRepository`). The latter is being used in the loan payment screen to get the user's current balance. 

In next iterations, this component will also have a repository for user stats. 

The event being analyzed in this component is when a user taps on the edit profile button. The event includes the user ID in its metadata.
