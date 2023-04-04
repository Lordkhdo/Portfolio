import * as C from "./style"
type ModalValues ={
    imagem:string
    nome:string
    descriçao:string
    repositorio: string
    projeto:string
  }
type Props = {
    image:string
    nameProject?:string
    nome:string
    descriçao:string
    repositorio: string
    projeto:string
    setModalValue: (value: React.SetStateAction<ModalValues>)=> void
}

const CardProject = ({image, setModalValue,nome,descriçao,repositorio,projeto}: Props) => {


    const SetValor = () =>{
        setModalValue({
            imagem:image,
            nome:nome,
            descriçao:descriçao,
            repositorio: repositorio,
            projeto:projeto
        })
    }

    
    return ( 
    <C.Card onClick={()=> SetValor()} image={image}>
        <div className="container">
            <div className="card">
                <div className="image">
                    
                </div>
                <div className="content">
                    <p>Deseja ver mais?</p>
                </div>
            </div>
        </div>
    </C.Card>
     )
}
 
export default CardProject;