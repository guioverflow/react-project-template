import React, { useState } from 'react';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'

import './styles.css';

const SideMenu = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`side-menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className={'button'} onClick={toggleMenu}>
                {isExpanded ? <BsArrowBarLeft/> : <BsArrowBarRight/>}
            </button>

            {isExpanded ? (
                <div>
                    <p>Teste 1</p>
                </div>
            ) : (
                <div>
                    <p>Teste 2</p>
                </div>
            )}
        </div>
    );
};

export default SideMenu;
