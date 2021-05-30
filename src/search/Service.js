
const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject('Something went wrong!!'))
    })
}

const debouncingMethod = (timeout) => {
    let timer;
    return function (search) {
        return new Promise(resolve => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                getData(search)
                    .then(res => resolve(res))
            }, timeout);
        })
    }
}

var debounceSearch = debouncingMethod(300)

export default debounceSearch