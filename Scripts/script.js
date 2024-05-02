function fecha() {
        let fecha = new Date()
        let year = fecha.getFullYear()
        document.getElementById("copyright").innerText = `Todos los derechos reservados @:`+year
}fecha()