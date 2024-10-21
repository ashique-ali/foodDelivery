import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex gap-4">
                <nav id="sidebar" className="sidebar shadow p-4" style={{ width: "15%", background: "#06065d", minHeight: "100vh" }}>
                    <div className="sidebar-sticky">
                        <h4 className="text-white mt-4">Dashboard</h4>
                        <ul className="nav flex-column mt-4 d-flex gap-3">
                            <li className="nav-item">
                                <Link to="addproduct/:{}" className="text-white text-decoration-none">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-white text-decoration-none" to="productlist">Product List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-white text-decoration-none" to="orderlist">Order List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="content shadow" style={{ width: "85%", margin: 'revert' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Dashboard;