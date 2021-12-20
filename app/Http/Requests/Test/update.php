<?php

namespace App\Http\Requests\Test;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
            'nombre' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                })->ignore($request->id),
            ],
            'apellido' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                })->ignore($request->id),
            ],
            'sexo' => [
                'bail',
                'required',
                Rule::unique('tests')->where(function ($query) {
                })->ignore($request->id),
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
