const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const stipo= document.querySelector('#m-tipo')
const svalor = document.querySelector('#m-valor')
const sdata = document.querySelector('#m-data')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  //Edição
  if (edit) {
    stipo.options[stipo.selectedIndex].value = itens[index].tipo
    svalor.value = itens[index].valor   
    sdata.value = itens[index].data
    id = index

  } else {
    stipo.options[stipo.selectedIndex].value = ''
    svalor.value = ''
    sdata.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.tipo}</td>
    <td> R$ ${item.valor}</td>
    <td>${item.data}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (stipo.options[stipo.selectedIndex].value == '' || svalor.value == '' || sdata.value == '') {
    return
  }

  e.preventDefault();

  //Cadastro 
  if (id !== undefined) {
    itens[id].tipo = stipo.options[stipo.selectedIndex].value
    itens[id].valor = svalor.value
    itens[id].data = sdata.value

  } else {
    itens.push({'tipo': stipo.options[stipo.selectedIndex].value, 'valor': svalor.value, 'data': sdata.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}


const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
