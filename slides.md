---
theme: academic
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Learn web development, react, react-native.
  Learn with Lakhan
drawings:
  persist: false
transition: slide-left
title: React Native Training
# mdc: true
---

# Welcome to React Native Training

By, Lakhan Samani<br/>
Handle: lakhansamani<br/>
Email: lakhan.m.samani@gmail.com

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/lakhansamani" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Agenda

<Toc maxDepth="1"></Toc>

---

# What is React Native

- Cross platfrom mobile application development
- Written in JavaScript—rendered with native code
- Two ways to run react-native applications
  - Expo (Easy to get started and implement business logic)
  - React Native CLI

---

# Env Setup

- Install Expo Go on your mobile (https://docs.expo.dev/get-started/expo-go/)
- Install React Native Tools By microsoft in your vscode

---

# Setting up our first project

```sh
npx create-expo-app MyApp
```

For using `react-native-cli`

- There is a nice boilerplate:

```sh
npx react-native@latest init MyApp --template @thecodingmachine/react-native-boilerplate
```

---

# Understanding project structure

- app.json - Manifest file
- App.tsx - entry point

---

# Core Components

- ActivityIndicator
- Alert
- Button
- FlatList
- Image
- ImageBackground
- Modal
- Pressable
- RefreshControl (Pull refresh)
- SectionList

---

- StatusBar
- Switch
- Text
- TextInput
- VirtualizedList
- Dimensions
- Animated

---

- ListView
- KeyboardAvoidingView
- ScrollView
- SafeAreaView
- View

Ref: https://reactnative.dev/docs/components-and-apis

---

# Android Specific

- BackHandler
- DrawerLayoutHandler
- PermissionsAndroid
- ToastAndroind

---

# iOS Specific

- ActionSheetIOS

---

# Navigation

```sh
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context

OR

npm install react-native-screens react-native-safe-area-context #for react-native-cli
```

Ref: https://reactnavigation.org/

---
