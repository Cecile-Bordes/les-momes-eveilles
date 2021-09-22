
import Accueil from './components/Accueil'
import Post from './components/Post'

export default [
    {path: '/', component: Accueil},
    {path: '/blogpost/:id', component: Post},
]

