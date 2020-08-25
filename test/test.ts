import { OSKBluetoothHCISocket } from "../src/bluetooth_hci_socket.class";

// This test basically just makes sure we don't segfault at initialization time.
try {
  console.log(OSKBluetoothHCISocket.default());
} catch (error) {
  console.error(error);
}
