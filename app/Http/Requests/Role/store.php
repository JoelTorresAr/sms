<?php

namespace App\Http\Requests\Role;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class store extends FormRequest
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
    public function rules()
    {
        return [
            'slug' => [
                'bail',
                'required',
                Rule::unique('roles')->where(function ($query) {
                }),
            ],
            'name' => [
                'bail',
                'required',
                Rule::unique('roles')->where(function ($query) {
                }),
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
