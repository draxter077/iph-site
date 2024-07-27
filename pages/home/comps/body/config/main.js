export default function configDiv(){
    return(`
        <div class="homeBodyConfigDiv">
            <div class="homeBodyConfigTitle">
                Olá, CLIENTE
                <button class="homeBodyConfigExitButton">Fechar</button>
            </div>
            <div class="homeBodyConfigUserInfo">
                <div>Usuário desde 22/02/2023</div>
                <div>fulano de fulano de tal</div>
                <div>user@example.com</div>
                <div>Chave Pix: blablababla</div>
            </div>
            <div class="homeBodyConfigChangeEmailDiv">
                <div class="homeBodyConfigChangeEmailSlider">
                    <div class="homeBodyConfigChangeEmailTitle">
                        Alterar email
                    </div>
                    <div class="homeBodyConfigChangeEmailContent">
                        <input placeholder="Novo email" class="homeBodyConfigChangeEmailInput">
                        <button class="homeBodyConfigChangeEmailButton">Alterar</button>
                    </div>
                </div>
            </div>
            <div class="homeBodyConfigChangePixDiv">
                <div class="homeBodyConfigChangePixSlider">
                    <div class="homeBodyConfigChangePixTitle">
                        Alterar chave Pix
                    </div>
                    <div class="homeBodyConfigChangePixContent">
                        <input placeholder="Nova chave" class="homeBodyConfigChangePixInput">
                        <button class="homeBodyConfigChangePixButton">Alterar</button>
                    </div>
                </div>
            </div>
            <div>
                <div class="homeBodyConfigChangePasswordDiv">
                    <div class="homeBodyConfigChangePasswordSlider">
                        <div class="homeBodyConfigChangePasswordTitle">
                            Alterar senha
                        </div>
                        <div class="homeBodyConfigChangePasswordContent">
                            <input placeholder="Nova senha" class="homeBodyConfigChangePasswordInput">
                            <button class="homeBodyConfigChangePasswordButton">Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="homeBodyConfigDisclaimer">
                Este não salva dados no seu navegador, de tal forma que
                você será automaticamente deslogado assim que fechar a aba.
            </div>
        </div>    
    `)
}