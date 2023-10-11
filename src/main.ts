import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wall">
    
    <img class="lunas" src="/lunas.svg" class="logo vanilla" alt="Lunas" />
    <h1>teuberes.com</h1>

    <div class="read-the-docs">
      <p>Beberapa hari lagi saya akan sharing pengalaman dalam merenovasi rumah di Griya Family IV</p>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
