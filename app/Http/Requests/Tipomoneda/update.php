<?php

namespace App\Http\Requests\Tipomoneda;

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
            'name' => [
                'bail',
                'required',
                Rule::unique('tipos')->where(function ($query) {
                })->ignore($request->id),
            ]
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Tipo de moneda',
        ];
    }
}
