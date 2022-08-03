<script>
  import Counter from './lib/Counter.svelte'
  import EbLogo from "./assets/logo.png";
  import { osDevice, statusMessage } from './store/store'
  let isOs = '';
  let statusMessageHome = '';
  osDevice.subscribe(os => {
    isOs = os;
  })

  statusMessage.subscribe(va => {
    statusMessageHome = va;
  })

</script>

<main>
  <div>
    <a href="https://ebloqs.com/" target="_blank"> 
      <img src={EbLogo} class="logo" alt="Svelte Logo" />
    </a>
  </div>
  <h3>{statusMessageHome}</h3>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check in <a href="#" target="_blank">{isOs}</a>!
  </p>

  <p class="read-the-docs">
    ¡Gracias por formar parte de la comunidad!
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .read-the-docs {
    color: #888;
  }
</style>
