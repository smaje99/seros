import Navigation from "Components/Navigation";
import useModal from 'Hooks/useModal';
import NavigationModal from "../NavigationModal/NavigationModal";

const Layout = ({ children }) => {
    const [isOpenModal, openModal, closeModal] = useModal();

    return (
        <>
            <Navigation {...{openModal, closeModal}}/>
            {children}
            <NavigationModal isOpen={isOpenModal} />
        </>
    )
}

export default Layout;