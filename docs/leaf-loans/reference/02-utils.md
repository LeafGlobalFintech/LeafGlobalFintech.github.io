# Utils

Inside utils we have classes that expose methods that are frequently used inside the app. Having them in one place decreases code repetition and allows for easy changes in implementation. 

Some methods exposes by the classes in utils are shortened versions of long methods that are available by some packages and/or that Flutter SDK.

Each of the classes are explained briefly below.

### `AppLinks`
AppLinks has the links for Leaf Wallet and it launches it. It saves us from repeating code every time we want to launch the app. We can have other links get launched here. The use of `external_app_launcher` is also limited to here and it should be limited here.

### `FlagUtil`
This has a method `getCode` that takes the country name returns the country code for a given country.

### `Formatter` 
This class formats values (date and numbers) to strings that correspond to the values. We have `formatDate` which formats dates in `yMMMMd` format, `formatDateMini` which formats dates in `d/M/yy`, and `formatMoney` which formats money with decimal places and commas.

### `ScreenSize`
This class actually just shortens the access to the properties `MediaQuery.of(context).size.height` and `MediaQuery.of(context).size.width`

### `TokenUtil`
This class has a method that creates a map entry for authorization header to be used in requests.