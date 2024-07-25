export default function bodyDiv(){
    const inputs = ["Email", "Senha"]
    return(`
        <div class="initBodyContentDiv">
            <div class="initBodyLogo">iPH</div>
            <div class="toBeOpenUp">
                <div class="initBodyFormsDiv">
                    <div class="initBodyTitleFormsDiv">Entrar em uma conta</div>
                    <div class="initBodyFormsInputs">
                        ${inputs.map(i => `<input class="initBodyInput" placeholder="${i}">`).join("")}
                    </div>
                    <div class="initBodyFormsForgotPassDiv"><button class="initBodyFormsForgotPassButton">Esqueceu a senha?</button></div>
                    <button class="initBodyFormsButton">Entrar</button>
                </div>
            </div>
        </div>
    `)
}