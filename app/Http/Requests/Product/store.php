<?php

namespace App\Http\Requests\Product;

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
            'description' => [
                'bail',
                'required',
                Rule::unique('products')->where(function ($query) {
                }),
            ],
            'detalle' => [
                'bail',
                'required'
            ]
          
            
        ];
    }

    public function attributes()
    {
        return [
            'description' => 'Nombre',
            'detalle' => 'Detalle',
            //'price' => 'Precio',
            
        ];
    }
}
