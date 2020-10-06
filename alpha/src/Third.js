import React from 'react-dom';

function Third()
{
    return(
        <>

     <article>
    <h2> Form</h2>

<form className="App">
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value=""></input><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value=""></input><br/><br/>
  <input type="submit" value="Submit"></input>
</form> 

      </article>   
       </>

    )
}
export default Third;