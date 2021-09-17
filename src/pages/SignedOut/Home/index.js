import {
    Container,
    FluxoImage
} from "./styles";
import fluxoImg from "../../../assets/fluxo.png"
const Home = () => {
    return(
        <Container>
            <h2>Fluxo Consultoria - CRA Template</h2>
            <FluxoImage
                src={fluxoImg}
                alt="Fluxo"
            />
            </Container>
    )
};

export default Home;