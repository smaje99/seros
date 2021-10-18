import Navigation from "Components/Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}

export default Layout;