import styles from './index.module.scss';
import { useRef, useEffect } from 'react'
import * as echarts from 'echarts';

export default function Chart() {
  let chartDom: any = useRef();
  useEffect(() => {
    let chart = echarts.init(chartDom.current);
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })
})
return (
  <div ref={chartDom} className={styles.chart}>

  </div>
)
}