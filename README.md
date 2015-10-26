# evil-icons-loader
An [Evil-icons](https://github.com/outpunk/evil-icons) loader for [webpack](https://github.com/webpack/webpack).

## Install

`npm install evil-icons-loader --save-dev`

## Usage

With jade-loader

```js
module: {
  loaders: [{
    test: /\.css/,
    loader: 'evil-icons-loader!jade-loader'
  }]
}
```
With ejs-loader

```js
module: {
  loaders: [{
    test: /\.css/,
    loader: 'ejs-loader!evil-icons-loader'
  }]
}
```

## Options

### `className`

Specify a icon class.

```js
module: {
  loaders: [{
    test: /\.css/,
    loader: 'evil-icons?className=myClass!jade'
  }]
}
```

## License
Licensed under the MIT license.
