<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\User;

class LoginController extends Controller
{

  private $user;

  public function __construct(){
    $this->middleware('auth:api', ['except' => ['login','register']]);
    // return auth()->shouldUse('api');
  }

    public function index(Request $req){
      return "index";
    }

    public function register(Request $req){
      $email = $req->email;
      $pswd = $req->password;

      $valid = Validator::make($req->all(), [
        "first_name" => "required",
        "last_name" => "required",
        "password" => "required|min:8",
        "email" => "required|unique:users,email",
      ]);

      if($valid->fails()){
        return  response()->json([
            "firstName" => null,
           "access_token" => null,
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
            "firstName" => null,
            "access_token" => null,
            "message" => "user already exists",
            "error" =>["registration" => $userExists->email." already exists"],

         ]);
       }

       $this->user = User::create([
            "first_name" => $req->first_name,
            "last_name" => $req->last_name,
            'email'    => $email,
            'password' => bcrypt($pswd),
        ]);


       $token = auth()->login($user);

       return $this->respondWithToken($token,"user successfully registered");

    }

    public function login(){
      $credentials = request(['email', 'password']);

      if (! $token = auth()->attempt($credentials)) {
          return response()->json(['error' => 'Unauthorized'], 401);
      }

      $this->user = auth()->user();
      return $this->respondWithToken($token,"user successfully logged in");
    }

    public function logout()
    {
        auth()->logout(true);

        return response()
        ->json([
                 'message' => 'Successfully logged out',
                 'access_token' => null,
                  'error' => null,
                  "firstName" => ocicolumnisnull
                 ]);
    }

    protected function respondWithToken($token,$msg)
  {
      return response()->json([
          'firstName' => $this->user->first_name,
          'access_token' => $token,
          'token_type' => 'bearer',
          // 'expires_in' => auth()->factory()->getTTL() * 120, // expires in two hours
          'expires_in' => auth()->factory()->getTTL() * 60, // expires in an hour
          'error' => null,
           'message' => $msg
      ]);
  }
}
