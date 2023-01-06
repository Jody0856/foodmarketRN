## Note about developing

### Starting Project

```sh
$ npx react-native init {Project Name}
```

- Don't forget to install android studio and config emulator or AVD https://medium.com/@vsburnett/how-to-set-up-an-android-emulator-in-windows-10-e0a3284b5f94
- see emulator list: emulator -list-avds
- run emulator:

```sh
$ emulator -avd {Emulator Name}
```

### Running Project

```sh
$ yarn start
```

- Installing Application on Emulator or Running on Phone (Recomended)

```sh
$ yarn android
```

- when installing android don't forget to setting environment variables in JAVA_HOME and path https://superuser.com/questions/237737/why-is-java-version-returning-a-different-version-to-the-one-defined-in-java-ho
- Implement Atomices Design by firstly create folder src and then assets,components,config,pages,redux,router,utils
- React Native SVG Install

```sh
$ yarn add react-native-svg //https://github.com/react-native-svg/react-native-svg
$ add --dev react-native-svg-transformer //https://www.npmjs.com/package/react-native-svg-transformer {--dev only build when on development}
```

- Installing Asset in {Name of Project}\android\app\src\main\assets\fonts{create folder with structure assets\fonts }
- Installing react navigation

```sh
$ yarn add @react-navigation/native
```

- Installing react navigation dependencies

```sh
$ yarn add react-native-screens react-native-safe-area-context
//Bwa yarn add react-native-screens react-native-safe-area-context react-native-reanimated react-native-gesture-handler @react-native-community/masked-view //
```

- if there are error mainActivity does not exist
  https://stackoverflow.com/questions/20915266/error-type-3-error-activity-class-does-not-exist
  ex:

```sh
$ adb uninstall com.foodmarketrn
```

- Installing react navigation stack

```sh
$ yarn add @react-navigation/stack
```

don't forget to installing if not installed

```sh
$ yarn add react-native-gesture-handler
```

- Installing React Native Picker (for select option)

```sh
$ yarn add @react-native-picker/picker
```

- Intalling react navigation bottom tabs

```sh
$ yarn add @react-navigation/bottom-tabs
```

- Installing React Native Tab View (Swipeable Tabs)

```sh
$ yarn add react-native-tab-view
```

installing dependencies

```sh
$ yarn add react-native-pager-view
```

- How to debugging
  Install React Native Debugger
  In real device, shake it and choose debug and reload
  in emulator, press ctrl+m and choose reload

- if there are error Invariant Violation: Module AppRegistry is not a registered callable module

```sh
$ rm -rf node_modules
$ npm i
$ npm start --reset-cache
$ yarn android
```

- Installing Redux + Redux Thunk + react Redux

```sh
$ yarn add redux redux-thunk react-redux
```

### Note about Redux

- Redux thunk is used as a middleware for api
- store in folder redux is used to store all reducer
- reducer is used to store state or value
- to initialize store is by modifying App.js on root src, passing it as an argument in provider
- redux is useful to set or get global state or value, so that it can used in any component or pages in react

- Installing Redux Native Flash Message

```sh
$ yarn add react-native-flash-message
```

- Installing Redux Native Image Picker

```sh
$ yarn add react-native-image-picker
```

- check on https://github.com/react-native-image-picker/react-native-image-picker
  to find the details dependency

- don't forget to us simbiolink, when the command cannot be executed, don't forget to exclude the command in cpanel, just search php, options and then delete the command
  php artisan storage:link

- action creator is can be used to simplify code, by combining with dispatch, and by combining with redux thunk, we can use it to store post function, and by passing it as an arrow function in an arrow function, it can work asynchronously, we can calling it by using dispatch, and the name of function as a parameter

- Async Storage / Local Storage (for storing data on phone)

```sh
$ yarn add @react-native-async-storage/async-storage
```

- React Number Format / for formating price data

```sh
$ yarn add react-number-format
```

- React Native Webview / for opening website inside app, using in midtrans https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Getting-Started.md

```sh
$ yarn add react-native-webview

```

- Testing payment in here https://docs.midtrans.com/en/technical-reference/sandbox-test?id=bank-transfer
