import { useState } from 'react';
import { Link } from 'react-scroll';

const MenuItem = ({ namanav, path, isActive, onClick }) => {

    return (
        <div>
            <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className={`${isActive ? 'text-primary' : 'text-white'} text-decoration-none item-cursor`}
                onClick={onClick}
            >
                {namanav}
            </Link>
        </div>
    );
};

export default MenuItem;
