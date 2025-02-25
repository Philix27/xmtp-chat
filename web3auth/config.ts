import * as WebBrowser from "@toruslabs/react-native-web-browser";
import EncryptedStorage from "react-native-encrypted-storage";
import Web3Auth, {
  OPENLOGIN_NETWORK,
  ChainNamespace,
} from "@web3auth/react-native-sdk";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

export const scheme = "web3authrnexample"; // Or your desired app redirection scheme
export const redirectUrl = `${scheme}://openlogin`;

export const clientId =
  "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ"; // get from https://dashboard.web3auth.io

export const chainConfig = {
  chainNamespace: ChainNamespace.EIP155,
  chainId: "0xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Ethereum Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  decimals: 18,
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

export const ethereumPrivateKeyProvider = new EthereumPrivateKeyProvider({
  config: {
    chainConfig,
  },
});

export const web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {
  clientId,
  redirectUrl,
  network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // or other networks
});
