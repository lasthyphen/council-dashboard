import environment from './environment'
import { getNetworkType, isLocalOrUnknownNetwork } from './lib/web3-utils'

const SUBGRAPH_NAME = environment('SUBGRAPH_NAME')

export const RINKEBY_COURT = '0xe9180dBE762Fe39520fC9883f7f7EFeBA6506534'

export const RINKEBY_STAGING_COURT =
  '0x52180Af656A1923024D1ACcF1D827AB85cE48878'

export const networkConfigs = {
  main: {
    court: '0x5955aEF707ea079d91B24B59076840830554E429',
    network_agent: '0x5e8c17a6065c35b172b10e80493d2266e2947df4',
    network_reserve: '0xec0dd1579551964703246becfbf199c27cb84485',
    nodes: {
      defaultEth: 'https://mainnet.eth.aragon.network/',
      subgraph:
        'https://graph.backend.aragon.org/subgraphs/name/aragon/aragon-court',
    },
  },
  rinkeby: {
    court: getRinkebyCourtAddress(SUBGRAPH_NAME),
    nodes: {
      defaultEth: 'https://rinkeby.eth.aragon.network/',
      subgraph: getRinkebySubgraphUrls(SUBGRAPH_NAME),
    },
  },
  dijets: {
    court: '0x5955aEF707ea079d91B24B59076840830554E429',
    nodes: {
      defaultEth: 'https://dijets.uksouth.cloudapp.azure.com:443/ext/bc/C/rpc',
      subgraph:
        'https://graphs.centralus.cloudapp.azure.com/subgraphs/name/aragon/aragon-court-dijets',
    },
  },
  ropsten: {
    court: '0x3b26bc496aebaed5b3E0E81cDE6B582CDe71396e',
    nodes: {
      defaultEth: 'https://ropsten.eth.aragon.network/',
      subgraph:
        'https://api.thegraph.com/subgraphs/name/aragon/aragon-court-ropsten',
    },
  },
  local: {
    court: '0x9b1f7F645351AF3631a656421eD2e40f2802E6c0',
    nodes: {
      defaultEth: 'http://localhost:8545',
      subgraph: 'http://127.0.0.1:8000/subgraphs/name/aragon/aragon-court-rpc',
    },
  },
}

export function getInternalNetworkName() {
  return isLocalOrUnknownNetwork() ? 'local' : getNetworkType()
}

export function getNetworkConfig() {
  return networkConfigs[getInternalNetworkName()]
}

export const networkAgentAddress = getNetworkConfig().network_agent

export const networkReserveAddress = getNetworkConfig().network_reserve

function getRinkebyCourtAddress(subgraphName) {
  if (subgraphName === 'staging') {
    return RINKEBY_STAGING_COURT
  }
  return RINKEBY_COURT
}

function getRinkebySubgraphUrls(subgraphName) {
  return `https://api.thegraph.com/subgraphs/name/aragon/aragon-court-${subgraphName ||
    'rinkeby'}`
}
