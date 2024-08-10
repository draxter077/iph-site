export default function bodyDiv(){
    return(`
        <div class="initBody">
            <div class="initBodyLogo">iPH</div>
            <div class="aboutUs">
                <div>
                    A iPH nasceu em 17/09/2023, com o objetivo de ser uma solução simples para o
                    gerenciamento do seu capital.<br><br>
                    Acreditamos que investimentos devem ser realizados seguindo três princípios:
                    lógica, estruturação e consistência. Assim, diversificamos seu capital em
                    quatro ativos: renda fixa, ações estrangeiras, ações nacionais e mercado futuro.
                    A proporção do seu capital em cada um deles será definida por oportunidades lógicas, 
                    respeitando a estrutura de um gerenciamento de risco; tudo isso seguindo a 
                    consistência de um sistema inteligente.<br><br>
                    Seja bem-vindo à iPH!
                </div>
            </div>
            <div class="toBeOpenUp">
                <div class="initBodyForms">
                    <div class="initBodyFormsInputs">
                        <input placeholder="Email">
                        <input placeholder="Senha" type="password">
                    </div>
                    <div class="initBodyFormsForgotPass"><button>Esqueceu a senha?</button></div>
                    <button>Entrar</button>
                </div>
                <div class="initBodyChangeForms"><button>Criar uma conta</button></div>
            </div>
        </div>
    `)
}