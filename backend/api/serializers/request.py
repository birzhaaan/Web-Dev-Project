# serializers/request_serializers.py
from rest_framework import serializers
from ..models import Request

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['id', 'user', 'volunteer', 'description', 'status', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']