import { Router } from "./Router.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

document.getElementById('page1Btn').addEventListener('click', function() {
    changePage('bgHome');
});

document.getElementById('page2Btn').addEventListener('click', function() {
    changePage('bgUniverse');
});

document.getElementById('page3Btn').addEventListener('click', function() {
    changePage('bgExploration');
});

function changePage(pageName) {
    document.body.className = pageName;
}

