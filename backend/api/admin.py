from django.contrib import admin
from .models import (
    User,
    Volunteer,
    Chat,
    ChatSession,
    Request,
)
# Register your models here.
admin.site.register([
    User,
    Volunteer,
    Chat,
    ChatSession,
    Request,
])