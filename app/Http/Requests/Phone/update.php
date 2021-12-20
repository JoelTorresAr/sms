<?php

namespace App\Http\Requests\Phone;

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
            'phone_number' => [
                'bail',
                'required',
                Rule::unique('phones')->where(function ($query) {
                })->ignore($request->id),
            ]
        ];
    }

    public function attributes()
    {
        return [
            'phone_number' => 'Teléfono Celular',
        ];
    }
}
