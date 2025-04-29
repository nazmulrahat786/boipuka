const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData
    }
    return [];
}
const addToStorageDB = (id)=>{
    const storedBookData = getStoredBook()
    if(storedBookData.includes(id)){
        alert('Already added to read list')
    }
    else{
        storedBookData.push(id)
        localStorage.setItem('readList', JSON.stringify(storedBookData))
        console.log(storedBookData);
    }
}

export {addToStorageDB, getStoredBook}