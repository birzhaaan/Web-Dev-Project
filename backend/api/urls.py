from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import auth_views, user_views, request_views, chat_views

router = DefaultRouter()
router.register('requests', request_views.RequestViewSet, basename='requests')

urlpatterns = [
    path('auth/register/', auth_views.register_user),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/logout/', TokenRefreshView.as_view(), name='token_refresh'),

    path('requests/<int:pk>', request_views.RequesByIdView.as_view()),

    path('users/me/', user_views.UserProfileView.as_view()),
    path('users/volunteer/<int:pk>/', user_views.VolunteerUserView.as_view()),
    path('users/<int:pk>/', user_views.UserDetailView.as_view()),

    path('volunteers/', user_views.VolunteerListView.as_view()),
    path('volunteers/<int:pk>/', user_views.VolunteerDetailView.as_view()),
    path('volunteers/<int:pk>/availability/', user_views.UpdateAvailabilityView.as_view()),

    path('chats/sessions/', chat_views.ChatSessionListCreateView.as_view()),
    path('chats/sessions/<int:pk>/messages/', chat_views.ChatMessageListCreateView.as_view()),

    path('', include(router.urls)),
]
