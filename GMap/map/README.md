map App using React Native.
This app demonstrates use of react-native to create project which use react-navigation.

##To test this out

1) Clone repository   
```
git clone https://github.com/rathirakesh/GMap.git
cd map
npm install
react-native run-android
```

##Get Started

#Creating this app 
1.  react-native init  map
2.  cd map
```
    2a)  npm install react-native-maps @mapbox/polyline --save
    2b) react-native link         <= do this after installing all npm packages.
```
3. react-native run-android.
4. wait few moments . You should see app running in device or emulator.

## Further Details
# [React Native](https://facebook.github.io/react-native/) &middot; 

Learn once, write anywhere: Build mobile apps with React.

- **Build native mobile apps using JavaScript and React:** React Native lets you build mobile apps using only JavaScript. It uses the same design as [React](https://facebook.github.io/react), letting you compose a rich mobile UI from declarative components.
- **A React Native app is a real mobile app:** With React Native, you don't build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that's indistinguishable from an app built using Objective-C, Java, or Swift. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.
- **Don't waste time recompiling:** React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state. Give it a try - it's a magical experience.
- **Use native code when you need to:** React Native combines smoothly with components written in Objective-C, Java, or Swift. It's simple to drop down to native code if you need to optimize a few aspects of your application. It's also easy to build part of your app in React Native, and part of your app using native code directly - that's how the Facebook app works.

The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.

See the official [React Native website](https://facebook.github.io/react-native/) for an introduction to React Native.

Supported operating systems are >= Android 4.1 (API 16) and >= iOS 8.0.

- [Getting Started](#getting-started)
- [Documentation](#documentation)

---

## Getting Started

Follow the [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html). The recommended way to install React Native depends on your project. Here you can find short guides for the most common scenarios:

- [Trying out React Native](https://snack.expo.io/BJ-uC-nrb)
- [Creating a New Application](http://facebook.github.io/react-native/docs/getting-started.html)
- [Adding React Native to an Existing Application](http://facebook.github.io/react-native/docs/integration-with-existing-apps.html)

---

## Documentation

[The website’s documentation](https://facebook.github.io/react-native/docs/getting-started.html) is divided into multiple sections.
- There are **Guides** that discuss topics like [debugging](https://facebook.github.io/react-native/docs/debugging.html), [integrating with existing apps](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html), and [the gesture responder system](https://facebook.github.io/react-native/docs/gesture-responder-system.html).
- The **Components** section covers React components such as [`View`](https://facebook.github.io/react-native/docs/view.html) and [`Button`](https://facebook.github.io/react-native/docs/button.html).
- The **APIs** section covers other libraries like [Animated](https://facebook.github.io/react-native/docs/animated.html) and [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html) that aren’t React components themselves.
- Finally, React Native provides a small number of **Polyfills** that offer web-like APIs.

Another great way to learn more about the components and APIs included with React Native is to read their source. Look under the `Libraries/Components` directory for components like `ScrollView` and `TextInput`, for example. The RNTester example is also here to demonstrate some of the ways to use these components. From the source you can get an accurate understanding of each component’s behavior and API.

The React Native documentation only discusses the components, APIs and topics specific to React Native (React on iOS and Android). For further documentation on the React API that is shared between React Native and React DOM, refer to the [React documentation](https://facebook.github.io/react/).
