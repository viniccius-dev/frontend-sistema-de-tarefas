import { Container, AboutIcon } from './styles';
import { About } from '../About';

import logoFatto from '../../assets/logo_fatto.png';
import { RiInformationLine } from 'react-icons/ri';
import toggleModal from '../../utils/toggleModal';

export function Header() {
    return(
        <Container>

            <img src={logoFatto} alt="Logo Fatto" />

            <AboutIcon>
                <RiInformationLine onClick={toggleModal} id="aboutButton" />
            </AboutIcon>

            <About />

        </Container>
    );
}