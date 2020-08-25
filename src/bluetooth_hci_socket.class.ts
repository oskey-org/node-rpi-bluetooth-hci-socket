import * as os from "os";

import { OSKUSBBluetoothHCISocket } from "./usb_bluetooth_hci_socket.class";
import { OSKNativeBluetoothHCISocket } from "./native_bluetooth_hci_socket.class";
import { EventEmitter } from "events";

export declare interface OSKBluetoothHCISocket {
  default(): OSKBluetoothHCISocket;
}

export class OSKBluetoothHCISocket extends EventEmitter {
  static default(): OSKBluetoothHCISocket {
    const platform = os.platform();

    if (platform === "linux" || platform === "android") {
      return new OSKNativeBluetoothHCISocket();
    } else throw new Error("Unsupported platform");
  }
}
