import { Container, About } from './styles';

import logoFatto from '../../assets/logo_fatto.png';
import { RiInformationLine } from 'react-icons/ri';

export function Header() {
    return(
        <Container>

            <img src={logoFatto} alt="Logo Fatto" />

            <About>
                <RiInformationLine />
            </About>

        </Container>
    );
}