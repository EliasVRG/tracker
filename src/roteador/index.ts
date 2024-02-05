import Formulario from "@/views/Projetos/Formulario.vue";
import Projetos from "@/views/Projetos.vue";
import TarefasVue from "@/views/Tarefas.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const rotas: RouteRecordRaw[] = [{
    path:'/',
    name: 'Tarefas',
    component: TarefasVue
},{
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
},{
    path: '/projetos/novo',
    name: 'Novo Projetos',
    component: Formulario
},{
    path: '/projetos/:id',
    name: 'Editar Projetos',
    component: Formulario
}

]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})
export default roteador;