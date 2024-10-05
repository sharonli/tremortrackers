import { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'

const AnimatedScatterPlot = () => {
  // Initialize state to store data for the plot
  const [data, setData] = useState([
    { x: [], y: [], type: 'scatter', mode: 'lines+markers', marker: { color: 'yellow' } },
  ])
  const [time, setTime] = useState(0)
  const [xRange, setXRange] = useState([0, 10]) // Initial x-axis range to display

  // Generate mock data and update state
  useEffect(() => {
    // Set an interval to simulate streaming data every second
    const interval = setInterval(() => {
      // Create a mock timestamp (e.g., incrementing days and time for the x-axis)
      const newX = new Date(Date.now() + time * 1000).toLocaleString('en-GB', {
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      // Create a mock velocity value (e.g., a random number)
      const newY = Math.random() * 10

      // Update the data
      setData((prevData) => {
        const updatedX = [...prevData[0].x, newX]
        const updatedY = [...prevData[0].y, newY]

        // Update x-axis range to "scroll" as new data points are added
        if (updatedX.length > 10) {
          setXRange([updatedX.length - 10, updatedX.length])
        }

        return [{ ...prevData[0], x: updatedX, y: updatedY }]
      })

      // Increment the time
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [time])

  return (
    <Plot
      data={data}
      layout={{
        title: 'Velocity vs Absolute Time',
        xaxis: {
          title: 'Absolute Time (Day Hour: Minute)',
          tickformat: '%d %H:%M',
          color: 'white',
          range: xRange, // Set the dynamic x-axis range here
        },
        yaxis: { title: 'Velocity (m/s)', color: 'white' },
        plot_bgcolor: '#000',
        paper_bgcolor: '#000',
        font: { color: '#eaff00' },
      }}
      useResizeHandler
      style={{ width: '100%', maxWidth: '800px', height: '600px' }}
    />
  )
}

export default AnimatedScatterPlot
