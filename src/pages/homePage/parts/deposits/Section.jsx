import { SectionDiv, Title, BankData } from "./style.js"

export function Deposits(atr){
    return(
    <SectionDiv $display={atr.showDeposits}>
        <Title>Novo depósito</Title>
        <BankData>
            <div>Para realizar um novo depósito, é preciso fazer uma transferência para a conta abaixo:</div>
            <div>Banco: 0260</div>
            <div>Agência: 0001</div>
            <div>Conta: 83937762-3</div>
            <div>Chave PIX: philippe.idalgoprestes@gmail.com</div>
            <div>Assim que você realizar o depósito, será notificado via email e seu depósito será transferido automaticamente para a conta titular da invPH</div>
        </BankData>
        <button onClick={() => atr.setShowDeposits(false)}>Fechar</button>
    </SectionDiv>     
    )
}