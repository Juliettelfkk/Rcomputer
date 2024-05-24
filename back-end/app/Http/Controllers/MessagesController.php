<?php

namespace App\Http\Controllers;

use App\Http\Resources\MessagesResource;
use Illuminate\Http\Request;
use App\Models\Message;

class MessagesController extends Controller
{
    public function store(Request $request){
        $message = Message::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'subject' => $request->input('subject'),
            'message' => $request->input('message'),
        ]);
        return new MessagesResource($message);
    }

    public function index(){
        $messages = Message::orderby('created_at', 'DESC');

        if (request()->has('search')) {
            $messages = $messages->where('name', 'like', '%' . request()->get('search') . '%');
        }

        return view('pages.messages', [
            'messages' => $messages->paginate(4),
        ]);
    }

    public function destroy(Message $message){
        $message->delete();

        return redirect()
            ->route('messages')
            ->with('success', 'Message Deleted Successfully !');
    }
}
