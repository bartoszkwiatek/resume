import React, { useContext, useRef, useEffect } from 'react'
import Chart from 'chart.js'
import { StoreContext } from './Store';
import { useTheme } from '@material-ui/core';

const SkillChart = () => {
  const theme = useTheme();
  const canvasRef = useRef();
  const context = useContext(StoreContext)

  const skillLabels = context.data[context.language].skills
    .map(skill => skill.name)
    .filter(skill => skill !== 'Others')
  const skillLevels = context.data[context.language].skills
    .map(skill => skill.level)
    .filter(skill => !!skill)

  // console.log(skillLabels)
  // console.log(skillLevels)
  useEffect(() => {
    Chart.defaults.global.defaultFontColor = theme.palette.text.primary;
    Chart.defaults.global.defaultFontFamily = "Roboto";

    new Chart(canvasRef.current, {
      type: 'radar',
      options: {
        responsive: true,
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 70
          },
        },
        legend: {
          position: 'bottom',
          fontColor: theme.palette.primary.contrastText,

        },
        title: {

          fontColor: theme.palette.primary.contrastText,
        },
        maintainAspectRatio: true,
        aspectRatio: 1,
        tooltips: {
          callbacks: {
            title: function (tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            label: function (tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']] + '/100';
            },
          },
        },
      },
      data: {
        labels: skillLabels,
        datasets: [{
          label: 'Current skill levels',
          data: skillLevels,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          fill: false

        }]
      }
    }, [theme])
  });

  return <canvas style={{ width: '100%' }} ref={canvasRef} />;
}

export { SkillChart }