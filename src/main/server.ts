import confApp from './config/app'
import env from '../main/config/env'
require('./config/bootstrap')

const app = confApp
app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
