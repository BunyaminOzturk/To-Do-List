let taskDOM = document.querySelector("#task")
let buttonDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")

const addItem = (element) => {
    console.log(taskDOM.value)
    let liDOM = document.createElement('li')
    liDOM.innerHTML = ` 
    ${element}<button type="button" class="ml-3 mb-3 mt-3 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    `
    listDOM.append(liDOM)
}

function eklendiToast(){
    var toast = document.querySelector('#liveToast');
    toast.classList.remove('hide');
    toast.classList.add('show');
    $(toast).toast('show');
}
function newElement(event){
    //event.preventDefault()
    eklendiToast()
    addItem(taskDOM.value)
}