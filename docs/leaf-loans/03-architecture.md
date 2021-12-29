# Architecture

We have followed **Clean Architecture**, as much as possible, to implement features. We have separate layers which communicate through interfaces. We also have inversion of control to avoid direct and hard-to-replace dependencies on packages and plugins.  

The code is organized into features. Some universal features are included inside the `lib/core` directory. Most features depend on `core`. More about what lies in code can be found in the detailed documentation.

Every feature has 3 layers: domain, data and presentation.

The **domain** layer is responsible for defining entities and repository contracts. 

The **data** layer is responsible for implementing repositories that abide the repository contracts and also have DTOs that can be mapped to entities.

The **presentation** layer is responsible for the UI, state, and user interactions and user interaction related events.

In addition to the above layers, every feature has an IOC directory which is used to register remote repositories which abide the repository contract. This is where one would replace the repository implementation with another one.



