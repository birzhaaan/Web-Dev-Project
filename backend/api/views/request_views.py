# views/request_views.py
from rest_framework import viewsets
from ..models import Request
from ..serializers.request import RequestSerializer
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS


class IsAuthenticatedOrReadOnly(BasePermission):
    """
    Auth required for unsafe methods (POST, PUT, DELETE)
    Read-only (GET, HEAD, OPTIONS) is always allowed
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True  # Allow read-only access
        return request.user and request.user.is_authenticated

class RequestViewSet(viewsets.ModelViewSet):
    serializer_class = RequestSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # user = self.request.user
        # if user.is_volunteer:
        #     return Request.objects.filter(volunteer__user=user)
        # return Request.objects.filter(user=user)
        return Request.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


