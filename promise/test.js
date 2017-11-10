Promise.resolve(1)
    .then((res) => {
        //console.log(res)
        console.log('2')
        return 2
    })
    .then((res) => {
        return 22;
    })
    .then(res => {
        console.log(333)
        return 333
    })
    .catch((err) => {
        return 3
    })
    .then((res) => {
        console.log('res')
        console.log(res)
    });