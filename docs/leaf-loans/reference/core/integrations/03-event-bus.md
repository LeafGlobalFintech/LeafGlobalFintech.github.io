# Event Bus

`EventBusAbstraction` defines three methods: `fire`, `destroy`, and `on`. `fire` adds an event to the stream which is returned by `on` and can be listened to.

`destroy` closes the stream controller.

