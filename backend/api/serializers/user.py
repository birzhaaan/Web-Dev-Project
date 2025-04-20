# serializers/user_serializers.py
from rest_framework import serializers
from ..models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'full_name', 'email', 'contact_info', 'profile_image', 'is_volunteer']
