import './index.css';
import { validarTamanho, validarNome } from "../../utils/validarJogador";

const Form = ({jogador1, jogador2, setDesaparecer, setJogador1, setJogador2}) =>{
    const handleForm = (e) => {
        e.preventDefault();
        try{
            if(validarJogadores()){
                setDesaparecer(true);
            }
        }
        catch(Error){
            alert(Error.message);
        }
    }

    const validarJogadores = () =>{
        if(validarNome(jogador1, jogador2)){
            throw new Error("O nome dos Jogadores não podem ser iguais");
        }
        else if(!validarTamanho(jogador1) || !validarTamanho(jogador2)){
            throw new Error("Nome dos Jogadores devem ter de 3 a 16 caracteres.");
        }
        else{
            return true;
        }
    }

    return(
        <div className="container-form">
            <div>
                <h1>Bora Jogar?</h1>
            </div>
            <form onSubmit={handleForm} className="form-jogador">
                
                <input 
                type="text" 
                id='jogador1' 
                placeholder="Jogador 1"
                onChange={e => { setJogador1(e.target.value); }}
                />
                <input 
                type="text" 
                id='jogador2' 
                placeholder="Jogador 2"
                onChange={e => { setJogador2(e.target.value); }}
                />
                <button>Confirmar</button>
            </form>
        </div>
    );
}

export default Form;