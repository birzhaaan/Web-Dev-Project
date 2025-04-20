# views/chat_views.py
from rest_framework import generics
from ..models import ChatSession, Chat
from ..serializers.chat import ChatSessionSerializer, ChatSerializer

class ChatSessionListCreateView(generics.ListCreateAPIView):
    serializer_class = ChatSessionSerializer

    def get_queryset(self):
        return ChatSession.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ChatMessageListCreateView(generics.ListCreateAPIView):
    serializer_class = ChatSerializer

    def get_queryset(self):
        return Chat.objects.filter(session__id=self.kwargs['pk'])

    def perform_create(self, serializer):
        session = ChatSession.objects.get(pk=self.kwargs['pk'])
        serializer.save(sender=self.request.user, session=session)
