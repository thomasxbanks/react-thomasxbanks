export const DataHandler = () => new Promise((resolve, reject) => {
  fetch('//api.github.com/users/thomasxbanks/repos?page=1&per_page=100')
  .then(r => r.json())
  .then(response => {
    console.log(response);
    resolve(response);
  })
  .catch((error) => {
    console.error(error);
    reject(error);
  })
})

export const getUser = () => new Promise((resolve, reject) => {
  fetch('//api.github.com/users/thomasxbanks')
  .then(r => r.json())
  .then(response => {
    console.log(response);
    resolve(response);
  })
  .catch((error) => {
    console.error(error);
    reject(error);
  })
})