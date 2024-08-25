import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import "@ethersproject/shims";
import { ethers } from "ethers";
import { LOGIN_PROVIDER } from "@web3auth/react-native-sdk";
import { web3auth, ethereumPrivateKeyProvider, chainConfig } from "./config";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [provider, setProvider] = useState<any>(null);
  const [console, setConsole] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      await web3auth.init();

      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        setProvider(ethereumPrivateKeyProvider);
        setLoggedIn(true);
      }
    };
    init();
  }, []);

  const login = async () => {
    try {
      if (!web3auth.ready) {
        setConsole("Web3auth not initialized");
        return;
      }
      if (!email) {
        setConsole("Enter email first");
        return;
      }

      setConsole("Logging in");
      await web3auth.login({
        loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
        extraLoginOptions: {
          login_hint: email,
        },
      });

      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        setProvider(ethereumPrivateKeyProvider);
        uiConsole("Logged In");
        setLoggedIn(true);
      }
    } catch (e: any) {
      setConsole(e.message);
    }
  };

  const logout = async () => {
    if (!web3auth.ready) {
      setConsole("Web3auth not initialized");
      return;
    }

    setConsole("Logging out");
    await web3auth.logout();

    if (!web3auth.privKey) {
      setProvider(null);
      uiConsole("Logged out");
      setLoggedIn(false);
    }
  };

  const getAccounts = async () => {
    if (!provider) {
      uiConsole("provider not set");
      return;
    }
    setConsole("Getting account");
    // For ethers v5
    // const ethersProvider = new ethers.providers.Web3Provider(this.provider);
    const ethersProvider = new ethers.BrowserProvider(provider!);

    // For ethers v5
    // const signer = ethersProvider.getSigner();
    const signer = await ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = signer.getAddress();
    uiConsole(address);
  };

  const getBalance = async () => {
    if (!provider) {
      uiConsole("provider not set");
      return;
    }
    setConsole("Fetching balance");
    // For ethers v5
    // const ethersProvider = new ethers.providers.Web3Provider(this.provider);
    const ethersProvider = new ethers.BrowserProvider(provider!);

    // For ethers v5
    // const signer = ethersProvider.getSigner();
    const signer = await ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = signer.getAddress();

    // Get user's balance in ether
    // For ethers v5
    // const balance = ethers.utils.formatEther(
    // await ethersProvider.getBalance(address) // Balance is in wei
    // );
    const balance = ethers.formatEther(
      await ethersProvider.getBalance(address) // Balance is in wei
    );
    uiConsole(balance);
  };

  const signMessage = async () => {
    if (!provider) {
      uiConsole("provider not set");
      return;
    }
    setConsole("Signing message");
    // For ethers v5
    // const ethersProvider = new ethers.providers.Web3Provider(this.provider);
    const ethersProvider = new ethers.BrowserProvider(provider!);

    // For ethers v5
    // const signer = ethersProvider.getSigner();
    const signer = await ethersProvider.getSigner();
    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await signer.signMessage(originalMessage);
    uiConsole(signedMessage);
  };

  const launchWalletServices = async () => {
    if (!web3auth) {
      setConsole("Web3auth not initialized");
      return;
    }

    setConsole("Launch Wallet Services");
    await web3auth.launchWalletServices(chainConfig);
  };

  const uiConsole = (...args: unknown[]) => {
    setConsole(JSON.stringify(args || {}, null, 2) + "\n\n\n\n" + console);
  };

  const loggedInView = (
    <View style={styles.buttonArea}>
      <Button
        title="Get User Info"
        onPress={() => uiConsole(web3auth.userInfo())}
      />
      <Button title="Get Accounts" onPress={() => getAccounts()} />
      <Button title="Get Balance" onPress={() => getBalance()} />
      <Button title="Sign Message" onPress={() => signMessage()} />
      <Button title="Show Wallet UI" onPress={() => launchWalletServices()} />
      <Button title="Log Out" onPress={logout} />
    </View>
  );

  const unloggedInView = (
    <View style={styles.buttonAreaLogin}>
      <TextInput
        style={styles.inputEmail}
        placeholder="Enter email"
        onChangeText={setEmail}
      />
      <Button title="Login with Web3Auth" onPress={login} />
    </View>
  );

  return (
    <View style={styles.container}>
      {loggedIn ? loggedInView : unloggedInView}
      <View style={styles.consoleArea}>
        <Text style={styles.consoleText}>Console:</Text>
        <ScrollView style={styles.console}>
          <Text>{console}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 30,
  },
  consoleArea: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  console: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    color: "#ffffff",
    padding: 10,
    width: Dimensions.get("window").width - 60,
  },
  consoleText: {
    padding: 10,
  },
  buttonArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  buttonAreaLogin: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  inputEmail: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
