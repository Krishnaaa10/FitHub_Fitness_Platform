from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('gymsite.urls')),
    path('calender',views.calender, name='calender')
]
