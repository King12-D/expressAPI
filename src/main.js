import { server } from './app-setup.js'

const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})