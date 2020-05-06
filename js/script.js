import './newRow.js';
import './terminal-header.js';
import dataStr from './stringOuput.js';

let target = document.querySelector("#input_user");
let main = document.querySelector("#main");

let scroller = () => {
    main.scrollTo(0, main.scrollHeight);
}

let checkAndCreate = () => {
    let row = document.createElement('new-row');
    let firstTime = true;

    if (target != null) {
        target.setAttribute('disabled', '');
        target.removeAttribute('id');
        firstTime = false;
    }

    main.appendChild(row);
    target = document.querySelector("#input_user");

    if (firstTime) {
        target.setAttribute('value', 'help');
    }
}

let compare = (input, compare) => {
    if (input === compare) {
        return true;
    }
    return false;
}

let chooseOutput = (input, text) => {
    if (compare(input, "help")) {
        text = dataStr.help;
    } else if (compare(input, "clear")) {
        main.innerHTML = "";
    } else if (compare(input, "ls")) {
        text = dataStr.ls;
    } else if (input.match(/cat */i)) {
        let file = input.replace(/cat /, "");

        if (file == "readme.txt") {
            text = dataStr.cat.readme;
        } else if (file == "bio.txt") {
            text = dataStr.cat.bio;
        }

    } else {
        text = dataStr.default;
    }

    return text;
}

let actionBeforeAddRow = (input) => {
    let p = document.createElement('p');
    let text = "";

    p.setAttribute('class', 'text-blue');

    text = chooseOutput(input, text);

    p.innerHTML = text;
    main.appendChild(p);
}


let addRow = () => {

    checkAndCreate();

    target.addEventListener('keyup', (ev) => {
        let input = target.value
        if (ev.key == "Enter") {
            actionBeforeAddRow(input);
            addRow();
        }
    });

    scroller();

}

addRow();