# serializers/chat_serializers.py
from rest_framework import serializers
from ..models import Chat, ChatSession

class ChatSerializer(serializers.ModelSerializer):
    sender_username = serializers.CharField(source='sender.username', read_only=True)

    class Meta:
        model = Chat
        fields = ['id', 'session', 'sender', 'sender_username', 'message', 'timestamp']
        read_only_fields = ['sender', 'timestamp']


class ChatSessionSerializer(serializers.ModelSerializer):
    messages = ChatSerializer(many=True, read_only=True)

    class Meta:
        model = ChatSession
        fields = ['id', 'request', 'user', 'volunteer', 'started_at', 'is_active', 'messages']
        read_only_fields = ['user', 'started_at']
