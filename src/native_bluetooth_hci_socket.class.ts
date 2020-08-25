import { EventEmitter } from "events";

import { OSKBluetoothHCISocket } from "./bluetooth_hci_socket.class";

export class OSKNativeBluetoothHCISocket extends EventEmitter implements OSKBluetoothHCISocket {
  default(): OSKBluetoothHCISocket {
    return OSKBluetoothHCISocket.default();
  }

  static default(): OSKBluetoothHCISocket {
    return OSKBluetoothHCISocket.default();
  }
}
