# node-bluetooth-hci-socket

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Node](https://img.shields.io/badge/node->=12-darkgreen.svg)](https://flutter.dev/)

`Copyright (c) 2020, Greg PFISTER`

Bluetooth HCI socket binding for Node.js, made to run on Raspberry Pi runnning linux (Raspbian, BalenaOS, Ubuntu).

**Note:** Currently only supports **Linux**.

## Prerequisites

### node-gyp

- [node-gyp requirements](https://github.com/TooTallNate/node-gyp#installation)

**Note:** `node-gyp` is only required if the npm cannot find binary for your OS version otherwise the binaries are prebuilt.

### Linux

- Bluetooth 4.0 Adapter

**Note:** the [node-usb](https://github.com/nonolith/node-usb) dependency might fail install, this is ok, because it is an optional optional dependency. Installing `libudev-dev` via your Linux distribution's package manager will resolve the problem.

## Platform Notes (for Linux)

## Force Raw USB mode

Unload `btusb` kernel module:

```sh
sudo rmmod btusb
```

Set `BLUETOOTH_HCI_SOCKET_FORCE_USB` environment variable:

```sh
sudo BLUETOOTH_HCI_SOCKET_FORCE_USB=1 node <file>.js
```

## Issues

Please report issue using the following template:

## Contributions

Contributions are welcome, please refer to the attached [Contribution Guidlines](CONTRIBUTING.md) file if you wish to make one.

## Licensing

Please refer to the attached [license](LICENSE.md) file.

## Credits

This is very much inspired by [@abandonware/node-bluetooth-hci-socket](https://github.com/abandonware/node-bluetooth-hci-socket).
