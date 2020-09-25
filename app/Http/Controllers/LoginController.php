<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\User;

class LoginController extends Controller
{

    public function index(Request $req){
      return "index";
    }

    public function register(Request $req){
      $email = $req->email;
      $pswd = $req->password;

      $valid = Validator::make($req->all(), [
        "password" => "required|min:8",
        "email" => "required|unique:users,email",
      ]);

      if($valid->fails()){
        return  response()->json([
           "username" => null,
           "token" => null,
           "login" => null,
           "message" => "validation errors",
           "error" =>["validation" => $valid->errors()],

        ]);
      }

       $userExists = User::where("email", $email)->first();

       if($userExists){
         // $token = auth()->login($userExists, true);
         // $this->user = $userExists;
         // return  $this->respondWithGoogle($token,"user already exists");
         return  response()->json([
            "token" => null,
            "login" => null,
            "message" => "user already exists",
            "error" =>["registration" => $userExists->email." already exists"],

         ]);
       }

       $user = User::create([
            'email'    => $email,
            'password' => bcrypt($pswd),
        ]);


       $token = auth()->login($user);

       return $this->respondWithToken($token);

    }

    public function login(){
      return response()->json(["login" => "yes, thank you"]);
    }

    protected function respondWithToken($token)
  {
      return response()->json([
          'access_token' => $token,
          'token_type' => 'bearer',
          'expires_in' => auth()->factory()->getTTL() * 60
      ]);
  }
}
