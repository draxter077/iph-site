import { SectionDiv, Title, Info, BankData, Button } from "./style.js"

export default function Deposits(atr){
    return(
    <SectionDiv $display={atr.showDeposits}>
        <Title>Novo depósito</Title>
        <Info>
            <div>Para realizar um novo depósito, é preciso fazer uma transferência para a conta abaixo:</div>
            <BankData>
                <div><strong>Banco:</strong> 0260</div>
                <div><strong>Agência:</strong> 0001</div>
                <div><strong>Conta corrente:</strong> 83937762-3</div>
                <div><strong>Chave Pix:</strong> philippe.idalgoprestes@gmail.com</div>
            </BankData>
            <div>Devido a limitações impostas pelo Banco Central, as contas em corretoras de valores podem receber depósitos apenas de contas do seu titular; ou seja, é preciso que o montante a ser transferido parta de uma conta do responsável por ela. Por essa limitação, a conta para depósito da iPH está no nome do titular da conta para investimentos.</div>
            <div>Assim que você realizar o depósito, será notificado via email e seu depósito será transferido automaticamente para a conta de investimentos. 😉</div>
        </Info>
        <Button><button onClick={() => atr.setShowDeposits(false)}>Fechar</button></Button>
    </SectionDiv>     
    )
}