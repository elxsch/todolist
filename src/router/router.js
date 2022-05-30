import { createWebHistory, createRouter } from "vue-router"

import PageConnexion from '@/pages/PageConnexion.vue'
import PageMonCompte from '@/pages/PageMonCompte.vue'
import PageListe from '@/pages/PageListe.vue'

const routes = [
{
    path:"/",
    name:"Connexion",
    component: PageConnexion,
},
{
    path: "/compte",
    name: "MonCompte",
    component: PageMonCompte,
},
{ 
    name: "ToDo", 
    path: '/todo/:id', 
    component: PageListe 
},
];

const ROUTER = createRouter({
    history: createWebHistory(),
    routes,
});

export default ROUTER;