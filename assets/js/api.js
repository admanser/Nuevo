class precioDolar {
    constructor({ moneda, casa, nombre, compra, venta, fechaActualizacion }) {
      this.moneda = moneda;
      this.casa = casa;
      this.nombre = nombre;
      this.compra = compra;
      this.compraNumerico = this.transformPrecio(compra);
      this.venta = venta;
      this.ventaNumerico = this.transformPrecio(venta);
      this.fechaActualizacion = fechaActualizacion;
    }
  
    transformPrecio(price) {
      return parseFloat(price);
    }
  
    printDisplay() {
      let container = document.getElementById("bannerDolar");
      let div = document.createElement("div");
      div.classList.add("bannerTipeDolar");
      div.innerHTML = `
            <h3>${this.nombre} |</h3>          
                <p> Compra: ${this.compra}</p>
                <p> Venta: ${this.venta}</p>
      `;
      container.appendChild(div);
    }
  }
  
  // El endpoint donde buscar la dar
  const URL0 = "https://dolarapi.com/v1/dolares/oficial";
  const URL1 = "https://dolarapi.com/v1/dolares/blue";
  const URL2 = "https://dolarapi.com/v1/dolares/bolsa";
  const URL3 = "https://dolarapi.com/v1/dolares/contadoconliqui";
  const URL4 = "https://dolarapi.com/v1/dolares/tarjeta";
  const URL5 = "https://dolarapi.com/v1/dolares/mayorista";
  const URL6 = "https://dolarapi.com/v1/dolares/cripto";
  
  const URLs = [URL0, URL1, URL5];
  
  const loadingData = () => {
    const fetchPromises = URLs.map(URL =>
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          console.log(data) // Verifica la estructura del JSON recibido
          // Crea una instancia de precioDolar y llama a printDisplay para cada URL
          const precio = new precioDolar(data);
          precio.printDisplay();
        })
        .catch(error => console.log({ error }))
    );
  
    Promise.all(fetchPromises).then(() => {
      console.log("Todas las solicitudes han sido completadas.");
    });
  };
  
  window.onload = loadingData;