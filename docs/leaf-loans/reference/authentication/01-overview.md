# Overview

This part of the app is responsible for taking care of the user authentication, and limiting access to the app based on authentication status.

It has a repository that connects with the backend API to authenticate a user and also a helper that assists in logging a user out when their token expires and the user can no longer access resources on the API. The helper is not limited to just logging a user out and the details are discussed on its separate section.
 