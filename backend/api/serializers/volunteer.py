# serializers/volunteer_serializers.py
from rest_framework import serializers
from .user import UserSerializer
from ..models import Volunteer

class VolunteerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Volunteer
        fields = ['id', 'user', 'is_available', 'skills', 'location']
