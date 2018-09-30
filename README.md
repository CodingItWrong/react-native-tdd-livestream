# react-native-tdd-livestream

A React Native project built with TDD on [my Twitch live stream](https://www.twitch.tv/codingitwrong). Follow along with the building of it by watching [the stream recordings](https://www.youtube.com/watch?v=vwIgAHnjc1k&list=PLXXnezSEtvNPZroRdvjhEVzOhURl572Lf).

## Prerequisites

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Xcode](https://developer.apple.com/xcode/)
- [Detox](https://github.com/wix/detox)

## Installation

```sh
$ git clone https://github.com/CodingItWrong/react-native-tdd-livestream.git
$ cd react-native-tdd-livestream
$ yarn install
```

## Testing

### Unit Tests

`yarn test` will run tests of components and plain JS code.

### End-to-End Tests

- In one terminal: `react-native start` (you can use the same instance you use for running in development)
- In another terminal: `detox test`

### Linting

`yarn lint`

## Running

- In one terminal: `react-native start`
- In another terminal: `react-native run-ios`

## License

Apache-2.0
