import React from 'react'
import { useWallet } from 'use-wallet'

import MessageCard from '../MessageCard'
import { useJurorRewardsEverClaimedQuery } from '../../hooks/query-hooks'

import iconNoRewardsSvg from '../../assets/IconNoRewards.svg'

function NoRewards() {
  // This component is only rendered when an account is connected so we are safe to assume that the wallet is not empty
  const wallet = useWallet()
  const hasJurorEverClaimedRewards = useJurorRewardsEverClaimedQuery(
    wallet.account
  )

  const title = 'No LQs yet!'
  const paragraph = hasJurorEverClaimedRewards
    ? 'You have either already claimed all your LQs'
    : 'Or Hal has yet to award you with the LQs'

  return (
    <MessageCard
      title={title}
      paragraph={paragraph}
      icon={iconNoRewardsSvg}
      border={false}
      mode="compact"
    />
  )
}

export default NoRewards
