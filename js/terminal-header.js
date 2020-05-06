class terminalHeader extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
                <div class="terminal_header">
                    <div class="btn_container">
                        <div class="btn btn_exit"></div>
                        <div class="btn btn_minimize"></div>
                        <div class="btn btn_maximize"></div>
                    </div>
                    <h3>
                        Teminal @ Web
                    </h3>
                </div>`;
    }
}
customElements.define('terminal-header',terminalHeader);