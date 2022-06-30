<div id="personalDetailsForm">
  <form action="/staff.json" method="post">
  <h2>Personal Details Form</h2>
    <div>
      <label for="first_name">First Name: </label>
      <input type="text" name="firstname" placeholder="eg. Tom">
    </div>
    <div>
      <label for="last_name">Last Name: </label>
      <input type="text" name="lastname" placeholder="eg. Hanks">
    </div>
    <div>
      <label for="born">Born: </label>
      <input type="text" name="born">
    </div>
    <div>
      <label for="address">Address: </label>
      <input type="text" name="address">
    </div>
    <div>
      <label for="cellphone">Cellphone: </label>
      <input type="text" name="cellphone">
    </div>
    <div id="sex">
        <label>Choose your sex:</label>
      <label>
        <input type="radio" name="male"> Male 
        </label>
    <label>
        <input type="radio" name="female"> Female
    </label>
    </div>
    <div>
        <input type="submit">
    </div>
  </form>
</div>

<style>
  #personalDetailsForm {
    background-size: cover;
    display:flex;
    box-sizing: content-box;
    align-content: center;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    text-align: end;
    gap: 1px;
    font-size: 20px;
    width: 85%;
    border-color: blueviolet;
    border:2px solid blueviolet;
    border-radius: 8px;
  }

  #first_name_txb {
    border-color: blueviolet;
  }

  h1 {
    color: blueviolet;
  }
</style>