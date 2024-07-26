export default function returnsGraph(){
    return(`
        <div class="homeBodyReturnsGraphDiv">
            <svg>
                <g>     
                    <circle cx="2%" cy="2%" r="0.5%">
                        <title>teste</title>
                    </circle>
                    <line x1="2%" x2="98%" y1="2%" y2="98%" stroke-width="1" stroke="rgb(0, 0, 0)">
                    </line>
                </g>
                <text x="0%" y="5%">teste</text>
                <line x1="5%" x2="95%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                <line x1="5%" x2="95%" y1="72.5%" y2="72.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                <line x1="5%" x2="95%" y1="50%" y2="50%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                <line x1="5%" x2="95%" y1="27.5%" y2="27.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                <line x1="5%" x2="95%" y1="5%" y2="5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
            </svg>
        </div>    
    `)
}