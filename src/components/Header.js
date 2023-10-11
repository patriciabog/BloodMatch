import BloodImage from './BloodImage';

function Header({full}) {
    return (
        <header className="header">
            <h1 className="header__title">Blood Match</h1>
            <BloodImage lleno={full} />
        </header>
    )
}

export default Header;