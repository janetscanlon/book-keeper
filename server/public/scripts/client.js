
function getBooks(){
    axios({
        method: 'GET',
        url: '/books'
    }).then((response) => {
        console.log('GET /books response.data', response.data)
        //! call render function here 

    }).catch((error) => {
        console.log('error in GET /books', error)
    })
}

getBooks()