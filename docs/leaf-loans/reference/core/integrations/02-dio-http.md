# Dio HTTP

Dio is used as an HTTP client. Based on the return type definition on the `HttpHelper` interface. 

One additional thing about this integration is that is that it takes an onResponse method that processes responses. In our case, the passed callback is from `AuthHelper` in the authentication feature. This helps in checking if responses have a 401 status code or not. In case they do, we use the logout method on the `AuthHelper` to log the user out.

