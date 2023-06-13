function Framework() {
    
    return (<>
        <div className="LogoSize">
            <span><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/>JavaScript</span>
            <span><img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"/>React</span>
            <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>Python</span>
            <span><img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"/>C#</span>
        </div>
        <fieldset className="DifficultySelector">
            <input type="radio" id="easy" value="easy"/> Easy
            <input type="radio" id="medium" value="medium"/> Medium
            <input type="radio" id="hard" value="hard"/> Hard
            <input type="radio" id="veryhard" value="veryhard"/> Very Hard
        </fieldset>
    </>)
}

export default Framework;