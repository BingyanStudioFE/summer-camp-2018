import { Store, $on, } from "./util";
import Controller from "./controller";
import View from "./view";

const view = new View();
const store = new Store("myTodo");
const controller = new Controller(view, store);

const refresh = () => controller.refreshView(document.location.hash);
$on(window, "load", refresh); // 此处必须异步,否则每次点击时的hash是之前的
$on(window, "hashchange", refresh);
