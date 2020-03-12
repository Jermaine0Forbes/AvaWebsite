import React,{Component} from 'react';

export default function Modal(){

  return (
  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" id="exampleModalLabel">Login to Ava</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="form login-form" method="get">
            <div className="form-group">
              <h5>Email</h5>
              <input className="form-control" type="email"  name="email"/>
            </div>
            <div className="form-group">
              <h5>password</h5>
              <input className="form-control" type="password"  name="password"/>
            </div>
            <div className="form-group">
              <input className="btn btn-primary mx-auto" type="submit"  value="Submit"/>
            </div>
          </form>
        </div>
        <div className="modal-footer">

         <a href="#" className="text-primary text-underline">Register if you don't have an account</a>

        </div>
      </div>
    </div>
</div>
  );
}
