<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="application/pdf; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte</title>
</head>

<body style="background:white!important;">
    <watermarkimage
        src="{{public_path("images/logo-dark.png")}}" alpha="0.1" size="140,80" />
    <table width="100%">
        <tr>
            <td width="100%" class="text-center">
                <span class="title">REPORTE DE PAGOS</span> <br>
            </td>
        </tr>
    </table>
    <hr />
    @if (count($reports) > 0)
            <div>
                <table class="full-width mt-10 mb-10">
                    <thead class="">
                        <tr>
                            <th class="border-top-bottom desc-9 text-left" width="20%">Cliente</th>
                            <th class="border-top-bottom desc-9 text-left" width="20%">E-mail</th>
                            <th class="border-top-bottom desc-9 text-left" width="20%">Dirección</th>
                            <th class="border-top-bottom desc-9 text-left" width="10%">Telefono</th>
                            <th class="border-top-bottom desc-9 text-left" width="10%">Pago</th>
                            <th class="border-top-bottom desc-9 text-left" width="10%">F. Pago</th>
                            <th class="border-top-bottom desc-9 text-left" width="10%">F. Registro</th>
                        </tr>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($reports as $item)
                            <tr>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->nombres}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->mail}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->direction}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->telephone}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->pago}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->fechapago}}
                                </td>
                                <td class="desc-9 text-left font-none border-box">
                                    {{ $item->created_at->format('Y-m-d') }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

    @else
        <div class="callout callout-info">
            <p>No se encontraron registros.</p>
        </div>
    @endif
</body>

</html>
