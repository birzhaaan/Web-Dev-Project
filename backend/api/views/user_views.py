from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers.user import UserSerializer
from ..serializers.volunteer import  VolunteerSerializer
from ..models import User, Volunteer
from rest_framework import generics


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class UserDetailView(APIView):
    def get(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=404)

class VolunteerDetailView(APIView):
    def get(self, request, pk):
        try:
            volunteer = Volunteer.objects.get(pk=pk)
            serializer = VolunteerSerializer(volunteer)
            return Response(serializer.data)
        except Volunteer.DoesNotExist:
            return Response({'error': 'Volunteer not found.'}, status=404)

class VolunteerUserView(APIView):
    def get(self, request, pk):
        try:
            volunteer = Volunteer.objects.filter(user_id=pk).first()
            serializer = VolunteerSerializer(volunteer)
            return Response(serializer.data)
        except Volunteer.DoesNotExist:
            return Response({'error': 'Volunteer not found.'}, status=404)

class VolunteerListView(generics.ListAPIView):
    queryset = Volunteer.objects.filter(is_available=True)
    serializer_class = VolunteerSerializer

class UpdateAvailabilityView(APIView):
    def put(self, request, pk):
        volunteer = Volunteer.objects.get(pk=pk)
        volunteer.is_available = request.data.get('is_available', True)
        volunteer.save()
        return Response({'status': 'Availability updated.'})