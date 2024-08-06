// src/components/Charts.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Charts = () => {
  // Data for Line Chart
  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1.6, 0.8, 0.8],
        fill: false,
        borderColor: 'orange',
        tension: 0.1,
      },
      {
        label: 'Sales',
        data: [1.4,0.9,0.45],
        fill: false,
        borderColor: 'teal',
        tension: 0.1,
      }
    ]
  };

  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 280).toFixed(2); 
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      
      const text = `Total 2659`;
      const textX = width / 2;
      const textY = height / 2;
      
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  };


  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      centerText: centerTextPlugin, 
      datalabels: {
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16,
        },
        anchor: 'end',
        align: 'start',
      },
    }
  };

  const lineOptions = {
    scales: {
      x: {
        title: {
          display: true,
          
        },
      },
      y: {
        title: {
          display: true,
          
        },
        ticks: {
          callback: function(value) {

            if (lineData.datasets[0].data.includes(value)) {
              return 'Orders: ' + value;
            } else if (lineData.datasets[1].data.includes(value)) {
              return 'Sales: ' + value;
            }
            return '';
          }
        }
      },
    },
    plugins: {
      datalabels: {
        display: false, 
      },
    },
  };

  return (
    
    <div className="charts">
      <div className="line-chart">
        <h2 className='topp'>Dashboard</h2>
        <h2>Sales vs Orders</h2>
        <Line data={lineData} options={lineOptions} plugins={[ChartDataLabels]} />
      </div>
      <div className="pie-chart">
        <h2>Portion of Sales</h2>
        <Pie data={pieData} options={pieOptions} plugins={[centerTextPlugin, ChartDataLabels]} />
      </div>
    </div>
  );
};

export default Charts;
