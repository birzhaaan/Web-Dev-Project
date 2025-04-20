# serializers/user_serializers.py
from django.contrib.auth.password_validation import validate_password
from ..models import Volunteer, User
from rest_framework import serializers

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    full_name = serializers.CharField()
    password = serializers.CharField(write_only=True)
    is_volunteer = serializers.BooleanField()

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            is_volunteer=validated_data['is_volunteer'],
            password=validated_data['password']
        )

        if validated_data['is_volunteer']:
            Volunteer.objects.create(user=user)

        return user
