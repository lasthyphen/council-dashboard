import React from 'react'
import { Link } from '@aragon/ui'

import large1 from './highlights/assets/rinkeby/large/1.png'
import large2 from './highlights/assets/rinkeby/large/2.png'
import large3 from './highlights/assets/rinkeby/large/3.png'
import large4 from './highlights/assets/rinkeby/large/4.png'
import large5 from './highlights/assets/rinkeby/large/5.png'

const TYPEFORM_LINK = ''

const highlights = {
  heading: 'Dijets Council',
  defaultVisualColor: '#FF9780',
  defaultButtonColor: '#FFFFFF',
}

highlights.main = [
  {
    title: {
      small: null,
      large: 'Welcome, Councillor',
    },
    description: {
      small: null,
      large: (
        <span>
          This is the Dijets Governance Council Portal connected to Dijets
          Mainnet. You can submit proposals, review decisions and much more..
        </span>
      ),
    },
    visual: {
      small: null,
      large: large1,
    },
  },
  {
    title: {
      small: null,
      large: 'Getting ANJ Tokens',
    },
    description: {
      small: null,
      large: (
        <span>
          We’ve airdropped 5,000 ANJ Tokens to each council member that is now
          fully registered and has his/her wallet hash generated. you will need
          these ANJ tokens for all actions performed on Dijets Network
        </span>
      ),
    },
    visual: {
      small: null,
      large: large2,
      color: '#F9FAFC',
      buttonColor: '#FF9780',
    },
  },
  {
    title: {
      small: null,
      large: 'Arbitrate your first proposal',
    },
    description: {
      small: null,
      large: (
        <span>
          Once you start exploring, you will find some mock proposals with
          realistic content that will allow you to become familiar with the
          functionality of this dashboard.
        </span>
      ),
    },
    visual: {
      small: null,
      large: large3,
    },
  },
  {
    title: {
      small: null,
      large: 'Get into Hals goodbooks',
    },
    description: {
      small: null,
      large: (
        <span>
          When you vote in favor of the plurality ruling, you will be rewarded
          with Likability Quotient. Just note that these rewards will be awarded
          in LQ tokens for the purpose of this dashboard version.
        </span>
      ),
    },
    visual: {
      small: null,
      large: large4,
    },
  },
  {
    title: {
      small: null,
      large: 'Stay up to date!',
    },
    description: {
      small: null,
      large: (
        <>
          <p>
            If you didn’t receive any Dijets ANJ, just complete
            <Link href={TYPEFORM_LINK}>this form</Link> and we’ll send you some
            funds swiftly!
          </p>
          <p>
            You’ll also receive notifications about important announcements,
            your assigned disputes, and upcoming tasks as a juror.
          </p>
        </>
      ),
    },
    visual: {
      small: null,
      large: large5,
    },
    start: {
      small: null,
      large: 'Discover Dijets Council',
    },
  },
]

highlights.dijets = [
  {
    title: {
      small: null,
      large: 'Welcome, Councillor',
    },
    description: {
      small: null,
      large: (
        <span>
          This is the Dijets Governance Council Portal connected to Dijets
          Mainnet. You can submit proposals, review decisions and much more..
        </span>
      ),
    },
    visual: {
      small: null,
      large: large1,
    },
  },
  {
    title: {
      small: null,
      large: 'Getting ANJ Tokens',
    },
    description: {
      small: null,
      large: (
        <span>
          We’ve airdropped 5,000 ANJ Tokens to each council member that is now
          fully registered and has his/her wallet hash generated. you will need
          these ANJ tokens for all actions performed on Dijets Network
        </span>
      ),
    },
    visual: {
      small: null,
      large: large2,
      color: '#F9FAFC',
      buttonColor: '#FF9780',
    },
  },
  {
    title: {
      small: null,
      large: 'Arbitrate your first proposal',
    },
    description: {
      small: null,
      large: (
        <span>
          Once you start exploring, you will find some mock proposals with
          realistic content that will allow you to become familiar with the
          functionality of this dashboard.
        </span>
      ),
    },
    visual: {
      small: null,
      large: large3,
    },
  },
  {
    title: {
      small: null,
      large: 'Get into Hals goodbooks',
    },
    description: {
      small: null,
      large: (
        <span>
          When you vote in favor of the plurality ruling, you will be rewarded
          with Likability Quotient. Just note that these rewards will be awarded
          in LQ tokens for the purpose of this dashboard version.
        </span>
      ),
    },
    visual: {
      small: null,
      large: large4,
    },
  },
  {
    title: {
      small: null,
      large: 'Stay up to date!',
    },
    description: {
      small: null,
      large: (
        <>
          <p>
            If you didn’t receive any Dijets ANJ, just complete
            <Link href={TYPEFORM_LINK}>this form</Link> and we’ll send you some
            funds swiftly!
          </p>
          <p>
            You’ll also receive notifications about important announcements,
            your assigned disputes, and upcoming tasks as a juror.
          </p>
        </>
      ),
    },
    visual: {
      small: null,
      large: large5,
    },
    start: {
      small: null,
      large: 'Discover Dijets Council',
    },
  },
]

export { highlights }
