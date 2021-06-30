from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    
    path('login/', index),
    path('logout/', index),
    path('register/', index),

    path('filter/', index),
    path('create-post/', index),
    path('posts/<int:pk>', index),
    path('posts/<int:pk>/update/', index),

    path('articles/', index),
    path('articles/<int:pk>', index),
]
