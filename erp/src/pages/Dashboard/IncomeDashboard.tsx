import { ReactElement } from 'react'
import * as Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import { HighChartUI } from './subcomponents'
import useBreakpoint from 'use-breakpoint'
import BREAKPOINTS from 'const/breakpoint'
import FlexWrapper from 'components/FlexWrapper'
import { determineIncomeOptions, determineExpensesOptions } from './helpers'
drilldown(Highcharts)

const IncomeDashboard = (): ReactElement => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const isMobile = breakpoint === 'mobile'
  const isTablet = breakpoint === 'tablet'

  return (
    <FlexWrapper justifyContent="space-between">
      <HighChartUI
        containerProps={{
          style: { width: isMobile || isTablet ? '100%' : '48%' }
        }}
        highcharts={Highcharts}
        options={determineIncomeOptions()}
      />
      <HighChartUI
        containerProps={{
          style: { width: isMobile || isTablet ? '100%' : '48%' }
        }}
        highcharts={Highcharts}
        options={determineExpensesOptions()}
      />
    </FlexWrapper>
  )
}

export default IncomeDashboard
