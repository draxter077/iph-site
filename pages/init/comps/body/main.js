import constructMain from "../../../construct.js"

export default function bodyDiv(){
    return(`
        <div class="initBodyContentDiv">
            <div class="initBodyLogo">iPH</div>
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