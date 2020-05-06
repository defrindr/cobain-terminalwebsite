class newRow extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="row_group">
                <span>dev ( ~ ) : </span>
                <input type="text" class="terminal_input" id="input_user">
            </div>`;
    }
}

customElements.define('new-row',newRow);