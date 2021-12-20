<?php

namespace App\Http\Requests\Product;

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
            'description' => [
                'bail',
                'required',
                Rule::unique('products')->where(function ($query) {
                })->ignore($request->id),
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
            'detalle' => 'Deetalle',
          //  'price' => 'Precio',
            
        ];
    }
}