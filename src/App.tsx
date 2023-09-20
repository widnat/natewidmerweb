import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div>
				<div className="flex-row m-3">
					<div className="flex self-stretch justify-center text-gray-700 text-3xl">
						Welcome to my projects website of 2023!
					</div>
					<div className="flex self-stretch justify-center mt-3">
						Go ahead and check out some of my current projects in the links
						above <span className="text-lg ml-1">&#8593;</span>
					</div>

					<div className="flex self-stretch justify-center">
						This is a recording of Doodler, a Drawful clone. I wrote this using
						WebSockets to communicate between my Next.js front end and my Node
						Express backend.
					</div>
					<div className="flex self-stretch justify-center">
						<iframe
							width="1280"
							height="720"
							src="https://www.youtube.com/embed/QecI_FTcPOw"
							title="Doodler(a Drawful clone)"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</div>
			</div>
    </>
  )
}

export default App
