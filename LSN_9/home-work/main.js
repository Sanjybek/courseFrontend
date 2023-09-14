class Todo  {
    #dataArr = []
    getData() {
        // console.log(this.#dataArr);
    }
    setData(data) {
        this.#dataArr.push(data);
    }
    deleteData(id) {
        const arr = this.#dataArr.filter((e) => {
            if(e.id !== id) {
                return e;
            }
        }) 
        this.#dataArr = arr
    }
    editData(data) {
        const arr = this.#dataArr.map((i) => {
            if(i.id === data.id) {
                return data;
            } else {
                return i;
            }
        })
        this.#dataArr = arr
    }
    findData(id) {
        const arr = this.#dataArr.filter((e) => {
            if(e.id === id) {
                return e;
            }
        }) 
        this.#dataArr = arr
    }
    
}
const shopTodo = new Todo()
shopTodo.setData({
    name: 'Samsung',
    price: '64000som',
    rating: '2',
    id: '4',
})
shopTodo.setData({
    name: 'Iphone',
    price: '120000som',
    rating: '1',
    id: '1',
})
shopTodo.setData({
    name: 'Mi',
    price: '32000som',
    rating: '3',
    id: '3',
})
shopTodo.setData({
    name: 'Oppo',
    price: '64000som',
    rating: '5',
    id: '2',
})
shopTodo.setData({
    name: 'Vivo',
    price: '54000som',
    rating: '4',
    id: '5',
})
// shopTodo.deleteData('4')
shopTodo.editData({
    name: 'Nokia',
    price: '5000som',
    rating: '3',
    id: '3',
    
}) 
// shopTodo.findData('5')

shopTodo.getData()


