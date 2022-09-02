<script>
  import { osDevice, statusMessage } from '../store/store'
  
  const getOS = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator?.platform || window.navigator?.platform;
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    osDevice.update(n => n = platform);
    
    if(/Android/.test(userAgent)) {
      osDevice.update(n => n = `${userAgent} confirmado`);
    }

    const response = await fetch('https://api.ebloqs.com/docs/user/validate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "code" : code
      })
    })

    const newRes =  await response.text();

    const jsonRespo = JSON.parse(newRes);
    if(response.ok) {
      statusMessage.update(n => n = jsonRespo['message']);
    } else {
      statusMessage.update(n => n = jsonRespo['message']);
    }
  }

  const openAppAndroid = () => {
    window.location.replace('ebloqsurl://ebloqs-validate.netlify.app');
  }
  getOS();
</script>

<button on:click={openAppAndroid}>
  Volver a la aplicación
</button>
