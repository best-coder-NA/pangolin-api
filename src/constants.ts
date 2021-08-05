import {BigNumber} from '@ethersproject/bignumber';

export const GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex';
export const RPC_URL = 'https://api.avax.network/ext/bc/C/rpc';

export const ONE_TOKEN = BigNumber.from('1000000000000000000');
export const TOTAL_SUPPLY = ONE_TOKEN.mul(538_000_000);

export const PNG_ADDRESS = '0x60781C2586D68229fde47564546784ab3fACA982';
export const WAVAX_ADDRESS = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7';
export const WAVAX_PNG_ADDRESS = '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367';
export const FACTORY_ADDRESS = '0xefa94DE7a4656D787667C749f7E1223D71E9FD88';
export const TREASURY_VESTER_ADDRESS = '0x6747AC215dAFfeE03a42F49FebB6ab448E12acEe';
export const COMMUNITY_TREASURY_ADDRESS = '0x650f5865541f6D68BdDFE977dB933C293EA72358';

// https://github.com/pangolindex/interface/blob/master/src/state/stake/hooks.ts
export const STAKING_ADDRESSES = [
  '0x417c02150b9a31bcacb201d1d60967653384e1c6', // AVAX-ETH
  '0x94c021845efe237163831dac39448cfd371279d6', // AVAX-USDT
  '0xe968e9753fd2c323c2fe94caff954a48afc18546', // AVAX-WBTC
  '0x574d3245e36cf8c9dc86430eadb0fdb2f385f829', // AVAX-PNG
  '0xbda623cdd04d822616a263bf4edbbce0b7dc4ae7', // AVAX-LINK
  '0x701e03fad691799a8905043c0d18d2213bbcf2c7', // AVAX-DAI
  '0x1f6acc5f5fe6af91c1bb3bebd27f4807a243d935', // AVAX-UNI
  '0xda354352b03f87f84315eef20cdd83c49f7e812e', // AVAX-SUSHI
  '0x4df32f1f8469648e89e62789f4246f73fe768b8e', // AVAX-AAVE
  '0x2c31822f35506c6444f458ed7470c79f9924ee86', // AVAX-YFI
  '0x640d754113a3cbdd80bccc1b5c0387148eebf2fe', // AVAX-SNOB
  '0xf2b788085592380bfCAc40Ac5E0d10D9d0b54eEe', // AVAX-VSO
  '0xd3e5538A049FcFcb8dF559B85B352302fEfB8d7C', // AVAX-SPORE
  '0x4E258f7ec60234bb6f3Ea7eCFf5931901182Bd6E', // AVAX-BIFI
  '0x21CCa1672E95996413046077B8cf1E52F080A165', // AVAX-BNB
  '0x4219330Af5368378D5ffd869a55f5F2a26aB898c', // AVAX-XAVA
  '0xd7EDBb1005ec65721a3976Dba996AdC6e02dc9bA', // AVAX-PEFI
  '0x079a479e270E72A1899239570912358C6BC22d94', // AVAX-TRYB
  '0x99918c92655D6f8537588210cD3Ddd52312CB36d', // AVAX-SHERPA

  '0x7ac007afb5d61f48d1e3c8cc130d4cf6b765000e', // PNG-ETH
  '0xe2510a1fcccde8d2d1c40b41e8f71fb1f47e5bba', // PNG-USDT
  '0x681047473b6145ba5db90b074e32861549e85cc7', // PNG-WBTC
  '0x6356b24b36074abe2903f44fe4019bc5864fde36', // PNG-LINK
  '0xe3103e565cf96a5709ae8e603b1efb7fed04613b', // PNG-DAI
  '0x4f74bbf6859a994e7c309ea0f11e3cc112955110', // PNG-UNI
  '0x633f4b4db7dd4fa066bd9949ab627a551e0ecd32', // PNG-SUSHI
  '0xfd9acec0f413ca05d5ad5b962f3b4de40018ad87', // PNG-AAVE
  '0xc7d0e29b616b29ac6ff4fd5f37c8da826d16db0d', // PNG-YFI
  '0x08b9a023e34bad6db868b699fa642bf5f12ebe76', // PNG-SNOB
  '0x759ee0072901f409e4959E00b00a16FD729397eC', // PNG-VSO
  '0x12A33F6B0dd0D35279D402aB61587fE7eB23f7b0', // PNG-SPORE
  '0x518B07E2d9e08A8c2e3cB7704336520827a4d399', // PNG-BIFI
  '0x68a90C38bF4f90AC2a870d6FcA5b0A5A218763AD', // PNG-BNB
  '0x5b3Ed7f47D1d4FA22b559D043a09d78bc55A94E9', // PNG-XAVA
  '0x76e404Ab7357fD97d4f1e8Dd52f298A035fd408c', // PNG-PEFI
  '0x0A9773AEbc1429d860A492d70c8EA335fAa9F19f', // PNG-TRYB
  '0x80E919784e7c5AD3Dd59cAfCDC0e9C079B65f262', // PNG-SHERPA
];

export const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'uint256', name: '', internalType: 'uint256'}],
    name: 'balanceOf',
    inputs: [{type: 'address', name: '', internalType: 'address'}],
    constant: true,
  },
];
export const STAKING_REWARDS_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{type: 'address', name: '', internalType: 'contract IERC20'}],
    name: 'stakingToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{type: 'uint256', name: '', internalType: 'uint256'}],
    name: 'rewardRate',
    inputs: [],
  },
];
export const PAIR_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'address', name: '', internalType: 'address'}],
    name: 'token0',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'address', name: '', internalType: 'address'}],
    name: 'token1',
    inputs: [],
    constant: true,
  },
];
