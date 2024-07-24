<h1>
    Новый заказ создан!
</h1>

<table>
    <tr>
        <th>ID закза</th>
        <td>
            <a href="{{ $forAdmin ? env('BACKEND_URL').'/app/orders/'.$order->id : route('order.view', $order, true) }}">
                {{$order->id}}
            </a>
        </td>
    </tr>
    <tr>
        <th>Статус заказа</th>
        <td>{{ $order->status }}</td>
    </tr>
    <tr>
        <th>Цена заказа</th>
        <td>${{$order->total_price}}</td>
    </tr>
    <tr>
        <th>Дата заказа</th>
        <td>${{$order->created_at}}</td>
    </tr>
</table>
<table>
    <tr>
        <th>Изображение</th>
        <th>Название</th>
        <th>Цена</th>
        <th>Количество</th>
    </tr>
    @foreach($order->items as $item)
        <tr>
            <td>
                <img src="{{$item->product->image}}" style="width: 100px">
            </td>
            <td>{{$item->product->title}}</td>
            <td>${{$item->unit_price * $item->quantity}}</td>
            <td>{{$item->quantity}}</td>
        </tr>
    @endforeach
</table>
