<?php

namespace App\Http\Requests\Test;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'nombre' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                }),
            ],
            'apellido' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                }),
            ],
            'sexo' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                }),
            ]
        ];
    }

    public function attributes()
    {
        return [
            'nombre' => 'El nombre',
            'apellido' => 'El apellido',
            'sexo' => 'El sexo',
        ];
    }
}
