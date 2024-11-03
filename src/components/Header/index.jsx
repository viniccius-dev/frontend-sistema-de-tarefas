import { useState } from "react";
import { Container, AboutIcon } from './styles';
import { About } from '../About';

import logoFatto from '../../assets/logo_fatto.png';
import { RiInformationLine } from 'react-icons/ri';

export function Header() {
    const [showAbout, setShowAbout] = useState(false);

    const openAbout = () => setShowAbout(true);
    const closeAbout = () => setShowAbout(false);

    return (
        <Container>
            <img src={logoFatto} alt="Logo Fatto" />

            <AboutIcon>
                <RiInformationLine onClick={openAbout} />
            </AboutIcon>

            {showAbout && <About closeModal={closeAbout} />}
        </Container>
    );
}
