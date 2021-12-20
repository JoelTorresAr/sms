<?php

namespace App\Http\Requests\User;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        if ($request->password) {
            $password  = [
                'bail',
                'min:6',
                Rule::unique('users')->where(function ($query) {
                })->ignore($request->id),
            ];
        } else {
            $password = '';
        }

        if ($request->email) {
            $email  = [
                'bail',
                'email',
                Rule::unique('users')->where(function ($query) {
                })->ignore($request->id),
            ];
        } else {
            $email = '';
        }

        return [
            'name' => [
                'bail',
                'required'
            ],
            'username' => [
                'bail',
                'required'
            ],
            'email' => $email,
            'password' => $password
        ];
    }

    public function attributes()
    {
        return [
            'name'              => 'nombre',
            'email'             => 'correo',
            'username'          => 'usuario',
            'password'          => 'contraseña',
        ];
    }
}
