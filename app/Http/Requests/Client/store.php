<?php

namespace App\Http\Requests\Client;

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
            'code' => [
                'bail',
                'required',
                Rule::unique('clients')->where(function ($query) {
                }),
            ],
            'name' => [
                'bail',
                'required'
            ],
            'address' => [
                'bail',
                'required'
            ],
            'place' => [
                'bail',
                'required'
            ],
            'phone_number' => [
                'bail',
                'required',
                Rule::unique('clients')->where(function ($query) {
                }),
            ],
            'tipo_id' => [
                'bail',
                'required'
            ]
        ];
    }

    public function attributes()
    {
        return [
            'code' => 'Código',
            'name' => 'Nombre',
            'address' => 'Dirección',
            'place' => 'Lugar',
            'phone_number' => 'Teléfono Celular',
        ];
    }
}
