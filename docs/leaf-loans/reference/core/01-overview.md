# Overview

Inside core, we have the highest number of subcategories. This is because everything that is used by more than one feature and doesn't have a specific semantic meaning that belongs to a specific feature is included here.

It also serves as a point of integration for different packages. 

**Note:** All features depend on core.

Inside core we have the following 

### Abstractions
In abstractions, we define interfaces that are going to be implemented by different integrations. For example, one of the interfaces we have is `HttpHelper`. It defines the request types that an HTTP client needs to support to be used in the app. We then create an integration that implements the interface and call the methods we want from the package that we choose to use, which in the current implementation is Dio.

### Constants
We have all the values in the app that are reused and the same in this directory. This helps us constrain the changes to values to only a single place. 

### Data, Domain and Presentation Layers
As discussed in the architecture section of the documentation, we have these three layers since we are using clean architecture. What makes the three layers in core different from the rest in the features is the fact that they are used by more than one feature.

### Events
As discussed in the dependencies section, we use Event Bus to prevent direct dependency between different features. To make that a reality, events are defined in core. That way, there won't be any additional dependency needed for a feature to use the event bus since they depend on core either way.

### Integrations
Integrations are the solid implementations of the abstractions. They serve as wrappers around the packages and plugins used. Most integrations just directly call the methods that are provided by the dependency they are wrapping. Integrations are discussed in a bit more detail in the integrations section.

### Utils
Inside utils we have classes that expose methods that are frequently used inside the app. Having them in one place decreases code repetition and allows for easy changes in implementation. 

Some methods exposes by the classes in utils are shortened versions of long methods that are available by some packages and/or that Flutter SDK.

