# Contributing

## Prerequisites

- Make sure you have [Flutter](https://flutter.dev) installed.
- Create a Firebase project and obtain a Google Services configuration file for iOS or Android. This is mandatory to run the app. You can follow the instruction here on how to obtain the [Firebase Config File](https://firebase.google.com/docs/flutter/setup?platform=ios#add-config-file). You should then add them in the respective directories. In `ios/` for the iOS version and in `android/app/` for Android.
- We also use [Credo Lab's](https://www.credolab.com/) services to get information about our users' phone usage behaviors. You should get an **Authentication key** and **Endpoint URL** to allow the pull to happen.
- After obtaining the Credo credentials, add the following values to your **launch.json** under the **"configurations"** in VS Code.

        {
            "args": [
                "--dart-define",
                "CREDO_AUTH_KEY=CREDO_AUTH_KEY",
                "--dart-define",
                "CREDO_URL=CREDO_URL"
            ],
            "name": "loan_app",
            "request": "launch",
            "type": "dart",
        }
You can use the equivalent setup on Android Studio. 

If you run the app from terminal, you can pass the arguments as follows

    flutter run --dart-define CREDO_AUTH_KEY=CREDO_AUTH_KEY --dart-define CREDO_URL=CREDO_URL

## Installing

-   In the terminal type `flutter pub get` to install all required packages

## Developing

1. Install with

    ```sh
    git clone https://github.com/coretech/loan_app
    cd loan_app
    flutter run --dart-define CREDO_AUTH_KEY=CREDO_AUTH_KEY --dart-define CREDO_URL=CREDO_URL
    ```
2. Checkout a branch from `develop` and make your changes in it branch (say, `feat-new-stuff`). These changes can be adding new features, fixing bugs, adding documentations, or refactoring existing code. Make sure your commit messages reflect your changes. Look at the section below for detailed instructions.

3. Make sure that your branch successfully compiles and finishes `flutter analyze` without any error or warning. We won't be able to merge your PR if your code doesn't pass.

4. Make sure to periodically merge `develop` into your branch to avoid conflicts when creating a PR.

*Refer to [commit messages](https://leafglobalfintech.github.io/docs/commit-messages/) to see how we structure our commit messages*
