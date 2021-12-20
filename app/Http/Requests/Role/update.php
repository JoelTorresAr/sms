<?php

namespace App\Http\Requests\Role;

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
        return [
            'slug' => [
                'required',
                Rule::unique('roles')->where(function ($query) {
                })->ignore($request->id),
            ],
            'name' => [
                'required',
                Rule::unique('roles')->where(function ($query) {
                })->ignore($request->id),
            ]
        ];
    }

    public function attributes()
    {
        return [
            'slug' => 'El Slug',
            'name' => 'El Nombre del Perfil',
        ];
    }
}
