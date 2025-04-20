from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers.user import UserSerializer
from ..serializers.volunteer import  VolunteerSerializer
from ..models import Volunteer
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


class VolunteerListView(generics.ListAPIView):
    queryset = Volunteer.objects.filter(is_available=True)
    serializer_class = VolunteerSerializer

class UpdateAvailabilityView(APIView):
    def put(self, request, pk):
        volunteer = Volunteer.objects.get(pk=pk)
        volunteer.is_available = request.data.get('is_available', True)
        volunteer.save()
        return Response({'status': 'Availability updated.'})