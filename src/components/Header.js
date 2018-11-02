import React from 'react';

    function Header({score, difficulty, handleChangeDifficulty}) {
    return (
        <React.Fragment>
            <h1>
                Score : {score}
            </h1>
            <form>
            <select id="difficulty" name="whatever" value={difficulty} onChange={(event) => handleChangeDifficulty(event.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            </form>
        </React.Fragment>
    )
  }

export default Header;