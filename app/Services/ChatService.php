<?php

namespace App\Services;

use App\Models\Chat;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class ChatService
{
    public function query(): Builder
    {
        return Chat::query();
    }

    public function fetchAllMessage(): Collection
    {
        return $this->query()->with('user')->get();
    }

    public function store(array $data): ?Chat
    {
        if (empty($data)) {
            return null;
        }

        try {
            return $this->query()->create($data);
        } catch (\Exception $e) {
            throw new \Exception('Failed to store chat, reason: ' . $e->getMessage());
        }
    }
}
