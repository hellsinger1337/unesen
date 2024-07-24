<h2>
    Статус заказа изменен на "{{$order->status}}"
</h2>
<p>
    Ссылка на ваш заказ:
    <a href="{{route('order.view', $order, true)}}">Order #{{$order->id}}</a>
</p>
