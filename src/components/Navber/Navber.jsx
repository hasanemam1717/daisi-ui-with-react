

const Navber = () => {
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      

    return (
        <nav>
           <ul className="lg:flex gap-4">
           {
                routes.map(route => <li key={route.id} ><a href={`${route.path}`}>{route.name}</a></li>)
            }
           </ul>
        </nav>

    );
};

export default Navber;