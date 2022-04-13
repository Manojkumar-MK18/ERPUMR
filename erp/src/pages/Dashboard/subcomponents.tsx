import { ReactElement } from 'react'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { colors } from 'const/theme'
import { Span } from 'typography'
import strings from 'locale/en'

export const HighChartUI = styled(HighchartsReact)``

export const NotesLink = styled(Button)`
  color: ${colors.white};
  text-decoration: none;
  padding: 0 8px;
  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
    border: none;
  }
  height: 25px;
`

export const Srm = (): ReactElement => {
  return (
    <>
      <NotesLink variant="link">
        {strings.dashboard.applicationsReceived}
        <Span isBold color={colors.white}>
          234
        </Span>
      </NotesLink>
      <NotesLink variant="link">
        {strings.dashboard.applicationsClosed}
        <Span isBold color={colors.white}>
          234
        </Span>
      </NotesLink>
      <NotesLink variant="link">
        {strings.dashboard.applicationsPending}
        <Span isBold color={colors.white}>
          234
        </Span>
      </NotesLink>
    </>
  )
}
