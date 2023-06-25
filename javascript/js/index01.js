class Product {
    constructor () {
        this.id = 1;
        this.productArray = [];
        this.editId = null;
    }
    save() {
        let product = this.readData();

        if(this.validate(product)) {
            if(this.editId == null) {
                this.add(product);
            } else {
                this.updateHere(this.editId, product);
            }
        }

        this.tableList();
        this.cancel();
    }

    tableList() {
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for(let i = 0; i < this.productArray.length; i++) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_product = tr.insertCell();
            let td_value = tr.insertCell();
            let td_actios = tr.insertCell();

            td_id.innerText = this.productArray[i].id
            td_product.innerText = this.productArray[i].productName
            td_value.innerText = this.productArray[i].costs

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute("onclick", "product.preperEdition("+ JSON.stringify(this.productArray[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/botao-apagar.png';
            imgDelete.setAttribute("onclick", "product.delete("+ this.productArray[i].id+")")

            td_actios.appendChild(imgEdit);
            td_actios.appendChild(imgDelete);

            console.log(this.productArray);
        }
    }

    add(product) {
        product.costs = parseFloat(product.costs)
        this.productArray.push(product);
        this.id++;
    }

    updateHere(id, product) {
        for (let i = 0; i < this.productArray.length; i++) {
            if(this.productArray[i].id == id) {
                this.productArray[i].productName = product.productName;
                this.productArray[i].costs = product.costs;
            }
        }
    }

    preperEdition(dados) {
        this.editId = dados.id

        document.getElementById('product').value = dados.productName;
        document.getElementById('costs').value = dados.costs;
        document.getElementById('btn1').innerText = 'Update';
    }

    readData() {
        let product = {}

        product.id = this.id;
        product.productName = document.getElementById('product').value;
        product.costs = document.getElementById('costs').value;

        return product;
    }




    resol
    
    validate(product) {
        let msg = '';

        if(product.productName == '') {
            msg += '- inform the name of the product \n'
        }

        if(product.costs == '') {
            msg += '- inform the value of the product \n'
        
        telaresol
    }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true
    }

    cancel() {
        document.getElementById('product').value = '';
        document.getElementById('costs').value = '';

        document.getElementById('btn1').innerText = 'Save';
        this.editId = null;
    }

    delete(id) {

        if(confirm('You want delete the product ID ' + id)) {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.productArray.length; i++) {
            if(this.productArray[i].id == id) {
                this.productArray.splice(i, 1)
                tbody.deleteRow(i);
            }
        }
        console.log(this.productArray);
    }
  }
}

var product = new Product();