export default function userInfo(data){
    return(`
        <div class="homeBodyConfigUserInfo">
            <div id="userSince">Usuário desde ${data.creation}</div>
            <div id="userName">${data.name}</div>
            <div id="userEmail">${data.email}</div>
            <div id="userPix">${data.pix}</div>
        </div>
    `)
}