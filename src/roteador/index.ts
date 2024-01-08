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
}]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})
export default roteador;