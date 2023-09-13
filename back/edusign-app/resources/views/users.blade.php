<h1>Liste des users</h1>

@foreach($users as $user)
    <li>{{$user->login}}{{$user->firstname}}{{$user->name}}</li>
@endforeach
