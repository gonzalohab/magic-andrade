import Search from "../Search/Search";
import Cart from "../Cart/Cart";

const Top = () => {

    return (
        <section className="header-main border-bottom bg-white">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                    <div className="col-md-2">
                        {
              /*<img className="d-none d-md-flex" src="https://i.imgur.com/R8QhGhk.png" width="100" />
              */}
                    </div>

                    <Search />

                    <Cart />
                </div>
            </div>
        </section>
    )
}

export default Top;