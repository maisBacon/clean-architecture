import confApp from './config/app'

const app = confApp
app.listen(3333, () => console.log(`Server running at http://localhost:${3333}`))
