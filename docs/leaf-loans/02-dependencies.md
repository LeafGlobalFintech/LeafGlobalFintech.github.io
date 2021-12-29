# Dependencies

Leaf Loans depends on the following packages to achieve functionality and architectural requirements. A description about why each package is used is provided below.

The main purpose of this list is to give a high level overview of how some requirements are being met on the client application.

### [Cached Network Image](https://pub.dev/packages/cached_network_image)

As the name suggests, we use cached network image to cache network images. This helps make the app more responsive and consume less data as users try view the same image repeatedly.

### [Carousel Slider](https://pub.dev/packages/carousel_slider)

This package is used to show the loan stats that are found on the user profile page. The auto slide property on the slider widget it provides makes it a perfect fit for the cards.

### [Cupertino Icons](https://pub.dev/packages/cupertino_icons)

It adds the Cupertino Icons font to the application.

### [Dartz](https://pub.dev/packages/dartz)

Dartz adds some functional programming properties to Dart. We are specifically interested in using the `Either` type. Using `Either` allows to make functions return two types depending on how the process goes. Mostly, processes will "either" succeed or fail. To check if a process has failed, we usually use try-catch blocks. This starts to get a bit tedious since the exception is mostly taken care of at the top of the call stack and most functions will need to have a try-catch block to gracefully finish in case of an exception.

If we make it so that ever exception will be changed to a Failure type at the point of occurrence, we can neatly handle it on the top of the stack without having so many try-catch blocks. That is exactly what we are doing with dartz.

To find out more about this, check out this [article](https://medium.com/nerd-for-tech/better-error-handling-with-either-type-in-dart-b91bef20d716).

### [Dio](https://pub.dev/packages/dio)

Dio is the HTTP client that we are using in the app. DIo is chosen because it allows for multiple extensions for request and response processing, configs, caching, etc.

### [Dio HTTP Cache](https://pub.dev/packages/dio_http_cache)

As the name gives away, we use this package to cache responses. This easily integrates with Dio.

### [Event Bus](https://pub.dev/packages/event_bus)

We use Event Bus to avoid direct dependency between different features. This allows us to use a publish/subscribe pattern to make a feature trigger a side-effect on another feature.

### [External App Launcher](https://pub.dev/packages/external_app_launcher)

On some pages on the app, we launch the Leaf Wallet App. We use the package to open the app if it exists or open the store link if it does not.

### [Firebase Analytics](https://pub.dev/packages/firebase_analytics)

Firebase Analytics used to track events on the app. More on the functionalities of the package and the service could be found on the [FlutterFire website](https://firebase.flutter.dev/docs/analytics/overview).

### [Firebase Core](https://pub.dev/packages/firebase_core)

Added because Firebase packages depend on it to function properly.

### [Firebase Crashlytics](https://pub.dev/packages/firebase_crashlytics)

We use firebase crashlytics to log errors and crashes when the app is in use. This will make spotting production bugs much easier. It also helps us detect issues before we hear complaints from users.

### [Firebase Messaging](https://pub.dev/packages/firebase_messaging)

Used to for push notifications.

### [Firebase Performance](https://pub.dev/packages/firebase_performance)

Used to measure app performance metrics. The two important metrics we are measuring are startup time and network request latency.

### [Firebase Remote Config](https://pub.dev/packages/firebase_remote_config)

Some features need to be disabled or changed based on conditions, we use Firebase Remote Config to enable those.

### [Flag](https://pub.dev/packages/flag)

This package has flags of countries. We use them to show with currencies in some places.

### [Flutter Localizations](https://api.flutter.dev/flutter/flutter_localizations/flutter_localizations-library.html)

This package is required to implement localization in Flutter. To avoid depending on packages which might have changes every now and then, we have used this package from the Flutter team to implement our own localization delegate.
Unlike the other dependencies in the list, this is an SDK dependency. The library is included in the Flutter SDK

### [Get It](https://pub.dev/packages/get_it)
Get It is mostly used for dependency injection. Most of the packages we use are wrapped by a custom interface that defines the required methods. This enables us to switch packages with ease if need it be. 

We also use it in some places to avoid passing arguments down to the class that uses them. This increases code readability.

### [Hive](https://pub.dev/packages/hive)
Hive is our preferred local storage service because of its speed. If there ever comes a faster or more convenient local storage package, we can replace since it is used behind an interface.

### [Hive Flutter](https://pub.dev/packages/hive_flutter)
Hive Flutter adds some more extensions that make initializing and using Hive in Flutter much more convenient.

### [Intl](https://pub.dev/packages/intl)
Intl is used to format Date and Money in the app. 

### [Intro Slider](https://pub.dev/packages/intro_slider)
Used to show the onboarding slides that are displayed when the app is opened for the first time.

### [JWT Decoder](https://pub.dev/packages/jwt_decoder)
Used to read some values from the authentication token. 

### [Package Info](https://pub.dev/packages/package_info)
Used to show current app version on the about page.

### [Permission Handler](https://pub.dev/packages/permission_handler)
Used to request required permissions from the users. This specially applies to Credo related permissions.

### [PIN Code Fields](https://pub.dev/packages/pin_code_fields)
This packages provides us the text fields used on the PIN code confirmation sheet.

### [Provider](https://pub.dev/packages/provider)
Used for state management. 

### [Shimmer](https://pub.dev/packages/shimmer)
This package provides us the shimmering animations shown when parts of the screen are loading.

### [URL Launcher](https://pub.dev/packages/url_launcher)
Used to launch external URLs like articles, TOCs, etc.

### [UUID](https://pub.dev/packages/uuid)
Used to generate IDs for credo data scrapes.







