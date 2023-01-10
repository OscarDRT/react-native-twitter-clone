![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/56px-Twitter-logo.svg.png)

# Twitter Clone

## About The Project

This repository contains a Twitter clone app made with React Native and Expo cli.

To run the app on your local machine, you must first make sure you have an Expo development environment set up. You can find instructions on how to do this in the Expo documentation.

## Features

- [User Profile](https://github.com/OscarDRT/react-native-twitter-clone/blob/main/images/User_Profile.jpeg)
- [Single Tweet View](https://github.com/OscarDRT/react-native-twitter-clone/blob/main/images/Single_Tweet_View.jpeg)
- [New tweet](https://github.com/OscarDRT/react-native-twitter-clone/blob/main/images/New_tweet.jpeg)

## Built With

- [Expo](https://expo.dev/) - Tool for the development of mobile applications with React Native.
- [Redux](https://redux.js.org/) - State management library for JavaScript applications.
- [React Navigation](https://reactnavigation.org/) - Library for navigation between screens in React Native applications.
- [Axios](https://axios-http.com/) - Library for making HTTP requests.
- [FlashList](https://shopify.github.io/flash-list/) - Fast & performant React Native list.
- [Restyle](https://github.com/Shopify/restyle) - The Restyle library provides a type-enforced system for building UI components in React Native with TypeScript. It's a library for building UI libraries, with themability as the core focus.

These are just some of the libraries and tools that have been used in this project. You can find a more complete list of dependencies in the package.json file in the repository.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file(Exclusive variables for testing).

`API_URL`=`https://twitter154.p.rapidapi.com`

## Getting Started

Once you have the development environment set up, follow these steps:

1. Clone the repo

```sh
git clone https://github.com/OscarDRT/react-native-twitter-clone.git
```

2. Enter the folder

```sh
cd react-native-twitter-clone
```

3. install dependencies

```sh
yarn install
```

4. Start the expo development server

```sh
yarn ios
or
yarn android
```

## Usage/Examples

Build a simple screen

```javascript
import React from 'react'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { MainContainer } from '@components/Containers/Main'

export const Notifications = () => {
  return (
    <MainContainer>
      <HeaderBack title="Notifications" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Notifications Screen</Text>
      </Box>
    </MainContainer>
  )
}
```

## Authors

- [@OscarDRT](https://github.com/OscarDRT)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oscardrt/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Oscar__RT)
