import React, {Component} from "react";


export default class Login extends Component{

  render(){
    return(
      <main id="home" className="container wide pad-half padH">
        <section class="container">
          <form class="" action="" method="post">
            <div class="form-group row flex-column">
              <label for="">Username</label>
              <input  class="form-control col-4" type="text" name="username" value="" />
            </div>
            <div class="form-group row flex-column">
              <label for="">Password</label>
              <input  class="form-control col-4" type="text" name="password" value="" />
            </div>
            <div class="form-group row flex-column">
              <label for="">Email</label>
              <input  class="form-control col-4" type="email" name="email" value="" />
            </div>
            <div class="form-group row">
              <input  class="btn btn-primary" type="submit" name="submit" value="Submit" />
            </div>
          </form>

        </section>
      </main>
    )
  }
}
