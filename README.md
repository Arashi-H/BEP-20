This is a build for the testnet implmentation. Truffle config file will need to be changed to allow deployment onto the mainnet.

1. Install all the necessary dependencies by running

```
npm install
```

2. Start a testnet with Ganache or geth on port 8545


3. Compile contracts on testnet

```
truffle migrate
```


<h2>Binance Smart Chain</h2>
"It is a fork of Ethereum blockchain i.e., it's an exact copy of Ethereum. The only thing where
these 2 differ is their <b>Consensus Mechanism</b>. On <b>Ethereum</b> everybody can participate and be a miner. On <b>Binance Smart Chain</b> miners need to be pre-approved which clearly means that <b>Binance Smart Chain</b> is heavily <b>centralized</b>. It has only <b>21 validators, or miners</b>."


<h2>Important Terms</h2>

1. The <b>"name"</b> of the token contract is the long name by which the token contract should be known.

2. The <b>"symbol"</b> of the token contract is the symbol by which the token contract should be known.

3. <b>"decimals"</b> refers to how divisible a token can be, from 0 (not at all divisible) to 18 (pretty much continuous) and even higher if required. Technically, the decimals value is the number of digits that come after the decimal place when displaying token values on-screen. The reason that decimals exists is that Ethereum does not deal with decimal numbers, representing all numeric values as integers.
For example, if a contract represents an ownership of <b>"Rice"</b>, the token creator wants the unit of to represent <b>1 kilogram</b> of <b>"Rice"</b>, but also wants to allow users to hold and trade amounts of <b>"Rice"</b> down to the gram level (but no lower). As Ethereum does not support decimal numbers a token must represent <b>1g</b> of <b>"Rice"</b>, and to represent <b>1,000g</b> as a single <b>1Kg</b> unit to the external world the decimals are set to <b>3</b> (as there are <b>10³ grams</b> in the kilogram of <b>"Rice"</b> that the token creator wishes to be displayed as <b>1 token</b>). So, if a <b>Holder (0x1f69...3981)</b> hold <b>15987 Rice Tokens</b>, it means he is holding <b>15987 grams i.e., 15.987 KGs</b>. It can be seen that setting decimals to 3 literally means that when displaying Rice Token balances there should be 3 digits of the balance after the decimal point.

4. <b>"totalsupply"</b> is the final item that defines an ERC20/BEP20 token contract, and as mentioned is the sole mandatory parameter. The definition of <b>"totalsupply"</b> is simple: <b>"totalsupply"</b> equals the sum of all balances.

5. The <b>"balanceOf()"</b> function provides the number of tokens held by a given address. Note that anyone can query any address’ balance, as all data on the blockchain is public.

6. The <b>"transfer()"</b> function transfers a number of tokens directly from the message sender to another address.

7. <b>"approve()"</b> and <b>"transferFrom()"</b> are two functions that are used for <b>delegated transfer</b> which means another address can spend tokens on behalf of another address. First <b>approve()</b> function will called and then <b>transferFrom()</b> will be called, which simply means that owner first approve it and only then spender can spend token on his behalf.

8. Two events that must be triggered when the contract takes the relevant action. The first event is <b>Transfer()</b> which emits details of the movement of tokens from one address to another. The second event is <b>Approval()</b> which emits details of approvals of tokens from one address to another. These can be used to keep track of balance and allowance changes for addresses without needing to poll the blockchain.


"Events are data package that can be emitted from a smart contract and consume from outside smart contracts. Smart contract just emit events but once smart contract has emitted an event it can't read past event however, wallets and any external software can listen to these events." 
