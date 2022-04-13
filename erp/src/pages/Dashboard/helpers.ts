import theme, { colors } from 'const/theme'
import strings from 'locale/en'

export const determineIncomeOptions = () => {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: strings.chart.stacked.title
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May']
    },
    yAxis: {
      min: 100,
      title: {
        text: ''
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: 'white',
      borderColor: colors.lightGrey,
      borderWidth: 1,
      shadow: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0.1,
        borderColor: colors.lightGrey,
        color: colors.black,
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [
      {
        name: '2017',
        data: [750, 800, 900, 1000, 1250],
        color: theme.chart.stacked.first
      },
      {
        name: '2018',
        data: [750, 800, 900, 1000, 1250],
        color: theme.chart.stacked.second
      },
      {
        name: '2019',
        data: [750, 800, 900, 1000, 1250],
        color: theme.chart.stacked.third
      }
    ],
    credits: {
      enabled: false
    }
  }
}

export const determineExpensesOptions = () => {
  return {
    chart: {
      type: 'line'
    },
    title: {
      text: strings.chart.line.title
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      title: {
        text: ''
      }
    },
    yAxis: {
      title: {
        text: strings.chart.line.yAxis
      }
    },
    series: [
      {
        name: '',
        color: theme.chart.line.first,
        lineWidth: 1,
        data: [100, 200, 300, 200, 150, 250]
      }
    ],
    credits: {
      enabled: false
    }
  }
}
