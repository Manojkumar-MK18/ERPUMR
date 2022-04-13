import { ReactElement } from 'react'
import {
  SectionTitle,
  PageWrapper,
  FlexWrapper,
  Card,
  Notes,
  Stickies
} from 'components'
import useBreakpoint from 'use-breakpoint'
import BREAKPOINTS from 'const/breakpoint'
import IncomeDashboard from './IncomeDashboard'
import { Srm } from './subcomponents'
import strings from 'locale/en'

const Dashboard = (): ReactElement => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const isTablet = breakpoint === 'tablet'
  const isMobile = breakpoint === 'mobile'
  const {
    dashboard: {
      noOfStudents,
      totalFeeReceivable,
      totalFeeReceived,
      balanceFee,
      totalBillsPayable,
      totalBillsPaid,
      pendingBills,
      bankBalance,
      srm,
      title
    }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={title} />
      <FlexWrapper justifyContent="space-evenly">
        <Card
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="165px"
          title={noOfStudents}
          subTitle={'240'}
          variant="warning"
          icon={['fas', 'child']}
        />
        <Card
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="165px"
          title={totalFeeReceivable}
          subTitle={'240'}
          variant="danger"
          icon={['fas', 'rupee-sign']}
        />
        <Card
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="165px"
          title={totalFeeReceived}
          subTitle={'240'}
          variant="primary"
          icon={['fas', 'rupee-sign']}
        />
        <Card
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="165px"
          title={balanceFee}
          subTitle={'240'}
          variant="info"
          icon={['fas', 'rupee-sign']}
        />
      </FlexWrapper>
      <FlexWrapper justifyContent="space-evenly">
        <Notes
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="90px"
          title={'0'}
          subTitle={totalBillsPayable}
          variant="warning"
          icon={['fas', 'money-check']}
        />
        <Notes
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="90px"
          title={'0'}
          subTitle={totalBillsPaid}
          variant="info"
          icon={['fas', 'check']}
        />
        <Notes
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="90px"
          title={'0'}
          subTitle={pendingBills}
          variant="danger"
          icon={['fas', 'list']}
        />
        <Notes
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="90px"
          title={'0'}
          subTitle={bankBalance}
          variant="primary"
          icon={['fas', 'university']}
        />
      </FlexWrapper>
      <IncomeDashboard />
      <FlexWrapper justifyContent="flex-start">
        <Stickies
          width={isMobile ? '100%' : isTablet ? '40%' : '22%'}
          height="110%"
          title={srm}
          notes={<Srm />}
          variant="danger"
          icon={['fas', 'money-check']}
        />
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Dashboard
