# views/request_views.py
from rest_framework import viewsets
from ..models import Request
from ..serializers.request import RequestSerializer
from rest_framework.permissions import IsAuthenticated

class RequestViewSet(viewsets.ModelViewSet):
    serializer_class = RequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_volunteer:
            return Request.objects.filter(volunteer__user=user)
        return Request.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
