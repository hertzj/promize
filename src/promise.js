const basicPromise = new Promise((resolve, reject) => {
    resolve('basicPromise')
})
const funcPromise = () => new Promise((resolve, reject) => {
    resolve('funcPromise')
});
const chainedPromise = prom => new Promise((resolve, reject) => {
    resolve();
}).then(prom);
const rejectedPromise = () => null;

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
