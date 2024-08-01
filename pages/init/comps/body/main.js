import constructMain from "../../../construct.js"

export default function bodyDiv(){
    return(`
        <div class="initBodyContentDiv">
            <div class="initBodyLogo">iPH</div>
            <div class="aboutUsDiv">
                <div class="aboutUs">
                    A iPH nasceu em 17/09/2023, com o objetivo de ser uma solução simples para o
                    gerenciamento do seu capital.<br><br>
                    Acreditamos que investimentos devem ser realizados seguindo três princípios:
                    lógica, estruturação e consistência. Assim, diversificamos seu dinheiro em
                    quatro ativos: renda fixa, ações estrangeiras, ações nacionais e mercado futuro.
                    A proporção do seu capital em cada um deles será definida por oportunidades lógicas, 
                    respeitando a estrutura de um gerenciamento de risco; tudo isso seguindo a 
                    consistência de um sistema inteligente.<br><br>
                    Seja bem-vindo à iPH!
                </div>
            </div>
            <div class="toBeOpenUp">
                <div class="initBodyFormsDiv">
                    <div class="initBodyFormsInputs">
                        <input class="initBodyInput" placeholder="Email">
                        <input class="initBodyInput" placeholder="Senha" type="password">
                    </div>
                    <div class="initBodyFormsForgotPassDiv"><button class="initBodyFormsForgotPassButton">Esqueceu a senha?</button></div>
                    <button class="initBodyFormsButton">Entrar</button>
                </div>
                <div class="initBodyFormsCreateAccountDiv"><button class="initBodyFormsCreateAccountButton">Criar uma conta</button></div>
            </div>
        </div>
    `)
}