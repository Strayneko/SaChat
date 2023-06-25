<?php

namespace App\Http\Controllers;

use App\Jobs\SendMessage;
use App\Models\Chat;
use App\Services\ChatService;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ChatController extends Controller
{
    public function __construct(private ChatService $chatService)
    {
    }

    public function index(): Response
    {
        $messages = $this->chatService->fetchAllMessage();
        $messages = $messages->map(function (Chat $message) {
            $message->user = $message->user->only('name');
            return $message;
        });

        return Inertia::render('Chat/Index', [
            'messages' => $messages
        ]);
    }

    public function store()
    {
        $chat = $this->chatService->store(request()->all());
        SendMessage::dispatch($chat);
        return redirect()->route('chat.index');
    }
}
