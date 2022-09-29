import environment from './environment'

import { isLocalOrUnknownNetwork, getNetworkType } from './lib/web3-utils'
import { getNetworkConfig } from './networks'
import {
  getDefaultEthNode,
  getIpfsGateway,
  getSubgraphHttpEndpoint,
} from './local-settings'

const CHAIN_ID = environment('CHAIN_ID')
const COURT_SERVER_NAME = environment('COURT_SERVER_NAME')

// IPFS endpoint
export const IPFS_ENDPOINT = isLocalOrUnknownNetwork(CHAIN_ID)
  ? 'http://localhost:8080/ipfs'
  : 'http://localhost:8080/ipfs'

// Court server endpoint
export function courtServerEndpoint() {
  if (isLocalOrUnknownNetwork(CHAIN_ID)) {
    return 'http://127.0.0.1:8000'
  }

  const networkType = getNetworkType(CHAIN_ID)
  return `http://localhost:8000${
    networkType === 'dijets' ? '' : `-${COURT_SERVER_NAME || networkType}`
  }`
}

export function graphEndpoint() {
  const { nodes } = getNetworkConfig()
  return nodes.subgraph
}

export const defaultEthNode =
  getDefaultEthNode() || getNetworkConfig().nodes.defaultEth

export const defaultIpfsGateway = getIpfsGateway()

export const defaultSubgraphHttpEndpoint = getSubgraphHttpEndpoint()
