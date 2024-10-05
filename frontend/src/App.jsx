import AnimatedScatterPlot from './AnimatedScatterPlot'

function App() {

  return (
    <>
    <div className="bg-black min-h-screen flex items-start justify-center pt-10">
      <h1 className="text-5xl text-[#eaff00] font-bold">Tremor Trackers</h1>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <AnimatedScatterPlot />
      </div>
    </div>

      </>
  )
}

export default App