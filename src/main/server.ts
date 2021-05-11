import confApp from './config/app'
require('./config/bootstrap')

const app = confApp
app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))
