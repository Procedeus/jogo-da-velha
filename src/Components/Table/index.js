import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineCircle } from "react-icons/md";
import './index.css';

const Table = ({jogador1, jogador2}) => {
    const [matriz, setMatriz] = useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [jogador, setJogador] = useState(jogador1);
    const [count, setCount] = useState(1);
    const [countJog1, setCountJog1] = useState(0);
    const [countJog2, setCountJog2] = useState(0);

    const vezJogador = () => {
        if(count % 2 === 0){
            setJogador(jogador1);
        }
        else{
            setJogador(jogador2);
        }
        setCount(count + 1);
    }

    const verifMatriz = (novaMatriz) => {
        if (
          (novaMatriz[0][0] === jogador && novaMatriz[1][1] === jogador && novaMatriz[2][2] === jogador) ||
          (novaMatriz[2][0] === jogador && novaMatriz[1][1] === jogador && novaMatriz[0][2] === jogador) ||
          (novaMatriz[0][0] === jogador && novaMatriz[0][1] === jogador && novaMatriz[0][2] === jogador) ||
          (novaMatriz[1][0] === jogador && novaMatriz[1][1] === jogador && novaMatriz[1][2] === jogador) ||
          (novaMatriz[2][0] === jogador && novaMatriz[2][1] === jogador && novaMatriz[2][2] === jogador) ||
          (novaMatriz[0][0] === jogador && novaMatriz[1][0] === jogador && novaMatriz[2][0] === jogador) ||
          (novaMatriz[0][1] === jogador && novaMatriz[1][1] === jogador && novaMatriz[2][1] === jogador) ||
          (novaMatriz[0][2] === jogador && novaMatriz[1][2] === jogador && novaMatriz[2][2] === jogador)
        ) {
          vencedor();
        }
        else{
            let empate = true;
            matriz.forEach(item =>{
                item.forEach(val => {
                    if(val === 0){
                        empate = false;
                    }
                })
            })
            if(empate)
                deuEmpate();
        }
      }

    const vencedor = () =>{
        count % 2 !== 0 ? setCountJog1(countJog1 + 1) : setCountJog2(countJog2 + 1);
        setMatriz([[0,0,0],[0,0,0],[0,0,0]]);
        alert("Parabens " + jogador + ", você venceu a partida!!");
    }

    const deuEmpate = () =>{
        setMatriz([[0,0,0],[0,0,0],[0,0,0]]);
        alert("O jogo Empatou");
    }

    const handleMatriz = (linha, coluna) => {
        setMatriz(prevMatriz => {
          const novaMatriz = [...prevMatriz];
          if(novaMatriz[linha][coluna] === 0){
            novaMatriz[linha][coluna] = jogador;
            verifMatriz(novaMatriz);
            vezJogador();
          }
          return novaMatriz;
        });
    };

    return(
        <div className="table">
            <div className="score">
                <div className="vez">
                    <h2>Vez de </h2>
                    <h1 className={jogador === jogador1 ? 'x' : 'o'}>{jogador}</h1>
                </div>
                <div className="score-jogador">
                    <h3 className="x">{jogador1}</h3>
                    <div>
                        <h3 className="x">{countJog1}</h3>
                        <h3>-</h3>
                        <h3 className="o">{countJog2}</h3>
                    </div>
                    <h3 className="o">{jogador2}</h3>
                </div>
            </div>
            <table className="table-jogo">
                <tbody>
                    {matriz.map((linha, linhaIndex) => (
                    <tr key={linhaIndex}>
                        {linha.map((valor, colunaIndex) => (
                        <td className={valor === jogador1 ? 'x' : 'o'}
                            key={colunaIndex}
                            onClick={() => {
                            handleMatriz(linhaIndex, colunaIndex);
                            }}
                        >
                        {valor !== 0 ? (valor === jogador1 ? <FaTimes /> : <MdOutlineCircle />) : ''}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;