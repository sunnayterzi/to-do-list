let listDOM = document.getElementById("list")
let taskDOM = document.getElementById("task")
let ulDOM = document.getElementsByTagName("li")
let btnDOM = document.getElementById("liveToastBtn")
btnDOM.addEventListener('click', addTask)

deleteTask()

function deleteTask() {
    for (let i = 0; i < ulDOM.length; i++) {
        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeTask
        ulDOM[i].append(closeButton);
        ulDOM[i].onclick = done;

    }

}

function done() {
    this.classList.toggle("checked")
}

function removeTask() {
    this.parentElement.remove()
}


function addTask() {

    if (taskDOM.value == "") {
        $(".error").toast("show")
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = task.value
        taskDOM.value = ""
        liDOM.onclick = done
        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeTask
        liDOM.append(closeButton)
        listDOM.append(liDOM)
        inputElement.value = ("")

    }
}