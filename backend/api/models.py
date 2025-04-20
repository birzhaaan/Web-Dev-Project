from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_volunteer = models.BooleanField(default=False)
    full_name = models.CharField(max_length=100)
    contact_info = models.CharField(max_length=255, blank=True)
    profile_image = models.ImageField(upload_to='profiles/', null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Volunteer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='volunteer_profile')
    is_available = models.BooleanField(default=True)
    skills = models.TextField(blank=True)  # optional
    location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Volunteer: {self.user.username}"


class Request(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requests')
    volunteer = models.ForeignKey(Volunteer, null=True, blank=True, on_delete=models.SET_NULL, related_name='requests')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"Request by {self.user.username} ({self.status})"


class Chat(models.Model):
    session = models.ForeignKey('ChatSession', on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender.username}: {self.message[:30]}"


class ChatSession(models.Model):
    request = models.ForeignKey(Request, on_delete=models.CASCADE, related_name='chat_sessions')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chat_sessions_user')
    volunteer = models.ForeignKey(Volunteer, on_delete=models.CASCADE, related_name='chat_sessions_volunteer')
    started_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"ChatSession: {self.user.username} & {self.volunteer.user.username}"
