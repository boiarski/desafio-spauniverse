export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route (event){
        event = event || window.event;
        event.preventDefault();
        
        window.history.pushState({}, "", event.target.href);

        document.querySelectorAll('a').forEach(function (el) {
            el.classList.remove('active');
        });
    
        event.target.classList.add('active');
    
        this.handle();
    }
    
    handle() {
        const {pathname} = window.location;
        const route = this.routes[pathname];
    
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html
        })        
    }
}

