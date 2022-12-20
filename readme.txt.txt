* Starting Project
npx react-native init {Project Name}
-- Don't forget to install android studio and config emulator or AVD https://medium.com/@vsburnett/how-to-set-up-an-android-emulator-in-windows-10-e0a3284b5f94
-- see emulator list: emulator -list-avds
-- run emulator: emulator -avd {Emulator Name}

* Running Project
yarn start

* Installing Application on Emulator or Running on Phone (Recomended)
yarn android
-- when installing android don't forget to setting environment variables in JAVA_HOME and path https://superuser.com/questions/237737/why-is-java-version-returning-a-different-version-to-the-one-defined-in-java-ho
* Implement Atomices Design by firstly create folder src and then assets,components,config,pages,redux,router,utils
* React Native SVG Install
yarn add react-native-svg //https://github.com/react-native-svg/react-native-svg
yarn add --dev react-native-svg-transformer //https://www.npmjs.com/package/react-native-svg-transformer {--dev only build when on development}
* Installing Asset in {Name of Project}\android\app\src\main\assets\fonts{create folder with structure assets\fonts }
* Installing react navigation
yarn add @react-navigation/native
* Installing react navigation dependencies
yarn add react-native-screens react-native-safe-area-context
//Bwa yarn add react-native-screens react-native-safe-area-context react-native-reanimated react-native-gesture-handler @react-native-community/masked-view //
* if there are error mainActivity does not exist
https://stackoverflow.com/questions/20915266/error-type-3-error-activity-class-does-not-exist
ex: adb uninstall com.foodmarketrn
* Installing react navigation stack
yarn add @react-navigation/stack
don't forget to installing if not installed
-- yarn add react-native-gesture-handler
* Installing React Native Picker (for select option)
 yarn add @react-native-picker/picker
* Intalling react navigation bottom tabs
yarn add @react-navigation/bottom-tabs
* Installing React Native Tab View (Swipeable Tabs)
yarn add react-native-tab-view
installing dependencies
-- yarn add react-native-pager-view
* How to debugging
Install React Native Debugger
In real device, shake it and choose debug and reload
-- error app registry 2
delete node modules
gradlew clean
yarn install


