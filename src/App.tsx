import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Remove specific background and text color classes, rely on index.css body styles
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-mono bg-foreground text-secondary">
      <div className="mb-4 flex space-x-4"> {/* Added flex and space-x */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-12 w-12" alt="Vite logo" /> {/* Adjusted size */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-12 w-12" alt="React logo" /> {/* Adjusted size */}
        </a>
      </div>
      {/* Remove specific text color, rely on inherited foreground color */}
      <h1 className="text-3xl font-bold mb-4">Shadcn/ui Nier Style</h1>
      <div className="flex flex-col items-center space-y-4"> {/* Increased space */}
        {/* Button styles are handled by variants in button.tsx and variables in index.css */}
        <Button
          variant="outline_v2"
          onClick={() => setCount((count) => count + 1)}
        >
          TEXTO DE PRUEBAAAAAAAAAA {count}
        </Button>
        {/* Remove specific text color, rely on inherited foreground or muted-foreground */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* Remove specific text color, rely on text-muted-foreground potentially */}
      <p className="mt-4 text-sm text-muted-foreground"> {/* Keep text-muted-foreground if appropriate */}
        Click the button to increment the count.
      </p>
    </div>
  )
}

export default App
