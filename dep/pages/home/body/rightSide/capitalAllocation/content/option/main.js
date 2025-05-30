export default function option(t){
    let style = `
        {
            border: 1px solid rgb(0, 0, 0);
            padding: 10px;
            border-radius: 10px;
            font-size: 18px;
            margin: 0px 0px 0px 5px;
        }
        :responsive{
            margin: 10px 0px 0px 0px;
            width: 100%;
        }`
    const option = cE("div", style)
    option.innerHTML = t
    return(option)
}